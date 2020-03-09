export function parseQuery(query: string): {} {
  query = query.toLowerCase();
  const conditions = query.split(',');
  const pairs = conditions.map(condition => condition.split(':'));
  return Object.fromEntries(pairs);
}
