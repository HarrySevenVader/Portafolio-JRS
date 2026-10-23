import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import ts from "typescript";

const source = ts.createSourceFile(
  "StackSection.tsx",
  fs.readFileSync(new URL("../src/sections/StackSection.tsx", import.meta.url), "utf8"),
  ts.ScriptTarget.Latest,
  true,
  ts.ScriptKind.TSX,
);

function literal(node) {
  if (ts.isStringLiteral(node)) return node.text;
  if (ts.isArrayLiteralExpression(node)) return node.elements.map(literal);
  if (ts.isObjectLiteralExpression(node)) {
    return Object.fromEntries(node.properties.map((item) => [item.name.getText(source), literal(item.initializer)]));
  }
  throw new Error("La configuración de tecnologías debe ser declarativa");
}

function configuration(name) {
  const declaration = source.statements
    .flatMap((statement) => ts.isVariableStatement(statement) ? [...statement.declarationList.declarations] : [])
    .find((item) => item.name.getText(source) === name);
  assert.ok(declaration, `Falta la configuración ${name}`);
  return literal(declaration.initializer);
}

const categories = configuration("categories");
const groups = configuration("webTechnologyGroups");
const languages = configuration("programmingLanguages");
const webTechnologies = groups.flatMap((group) => group.technologies);
const mobileTechnologies = configuration("mobileTechnologies");
const generativeAiTools = configuration("generativeAiTools");
const dataGroups = configuration("dataTechnologyGroups");
const dataTools = dataGroups.flatMap((group) => group.technologies);
const dataPractices = configuration("dataPractices");
const cloudGroups = configuration("cloudTechnologyGroups");
const cloudTools = cloudGroups.flatMap((group) => group.technologies);

test("el menú conserva sus áreas y añade Lenguajes de programación", () => {
  assert.deepEqual(categories.map((category) => category.id), ["languages", "web", "mobile", "cloud", "data", "ai"]);
  assert.equal(new Set(categories.map((category) => category.id)).size, categories.length);
});

test("Desarrollo Web presenta el inventario vigente sin tecnologías descartadas", () => {
  const ids = webTechnologies.map((technology) => technology.id);
  assert.equal(new Set(ids).size, ids.length);
  for (const id of ["html", "css", "javascript", "typescript", "tailwind", "react", "nextjs", "fastapi", "go", "nodejs", "express", "rest", "postgresql", "mysql"]) {
    assert.ok(ids.includes(id), `Falta ${id}`);
  }
  for (const id of ["vue", "vuejs", "angular", "nestjs", "vercel", "netlify", "render", "googlecloud", "api-request", "api-response"]) {
    assert.equal(ids.includes(id), false, `${id} no pertenece al stack declarado`);
  }
});

test("Web conserva la persistencia en su grupo de bases de datos", () => {
  assert.deepEqual(groups.find((group) => group.id === "databases").technologies.map((technology) => technology.id), ["postgresql", "mysql"]);
});

test("Lenguajes no presenta HTML, CSS, bibliotecas ni entornos como lenguajes de programación", () => {
  const ids = languages.map((technology) => technology.id);
  assert.deepEqual(ids, ["python", "c-cpp", "javascript", "typescript", "sql"]);
  assert.equal(new Set(ids).size, ids.length);
});

test("cada tarjeta tiene un nombre, un propósito breve y un icono local válido", () => {
  for (const technology of [...webTechnologies, ...languages, ...mobileTechnologies, ...generativeAiTools, ...dataTools, ...dataPractices.technologies, ...cloudTools]) {
    assert.ok(technology.title.trim(), technology.id);
    assert.ok(technology.subtitle.trim(), technology.id);
    assert.ok(technology.subtitle.length <= 40, technology.id);
    assert.ok(Boolean(technology.icon) !== Boolean(technology.symbol), technology.id);
    if (technology.icon) {
      const svg = fs.readFileSync(new URL(`../public/assets/stack-web/${technology.icon}.svg`, import.meta.url), "utf8");
      assert.ok(svg.includes("<svg"), technology.icon);
    }
  }
});

test("Datos incluye las herramientas solicitadas y mantiene las prácticas separadas", () => {
  const ids = dataTools.map((technology) => technology.id);
  assert.equal(new Set(ids).size, ids.length);
  assert.deepEqual([...ids].sort(), ["sql", "excel", "power-query", "python", "pandas", "numpy", "playwright", "power-bi", "bigquery", "stibo-systems", "navicat"].sort());
  const practices = dataPractices.technologies.map((practice) => practice.id);
  assert.equal(new Set(practices).size, practices.length);
  assert.deepEqual(practices, ["etl", "data-quality", "exploratory-analysis", "trend-analysis", "product-analysis", "reporting"]);
  assert.ok(practices.every((id) => !ids.includes(id)));
  const groupIds = [...dataGroups, dataPractices].map((group) => group.id);
  assert.equal(new Set(groupIds).size, groupIds.length, "Los encabezados deben tener identificadores únicos");
});
