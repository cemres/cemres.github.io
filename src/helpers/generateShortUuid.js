const short = require("short-uuid");

export function generateShortUuid() {
  const generator = short("0123456789");
  return generator.generate();
}
