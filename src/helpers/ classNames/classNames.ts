type Mods = Record<string, boolean | string>
type Classes = Array< Mods | string>

export function classNames(...args: Classes){
  const stringifiedArgs = [];
  for (let arg of args) {
    if(typeof arg === 'string') {
      stringifiedArgs.push(arg);
    }
    if(typeof arg !== 'string') {
      Object.entries(arg)
        .filter(([className, value]) => Boolean(value))
        .forEach(([className]) => stringifiedArgs.push(className));
    }
  }
  return stringifiedArgs.join(' ');
}
