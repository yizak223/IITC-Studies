// #### something or undefined

let s: string;
s = "something"; // OK
//@ts-expect-error
s = undefined; // Error

let su: string | undefined;
su = "something"; // OK
su = undefined; // OK

// ### Smarts

function splitWordsOrElse(value: string | undefined): string[] {
  if (value !== undefined) {
    return value.split(' ');
  } else {
    //@ts-expect-error
    return value.split(' '); // Error
  }
}

// ### ENUMS

let direction: "up" | "down" | "left" | "right";

direction = "up"; // OK
//@ts-expect-error
direction = "west"; // Error

type Direction = "up" | "down" | "left" | "right";
type Location = { x: number; y: number };

function move(location: Location, direction: Direction) {
  switch (direction) {
    case "up":
      location.y += 1;
      break;
    case "down":
      location.y -= 1;
      break;
    case "left":
      location.x -= 1;
      break;
    case "right":
      location.x += 1;
      break;
  }
}

// ### Variant Object Types

type Command =
  | {
      kind: "move";
      direction: Direction;
    }
  | {
      kind: "print";
    }
  | {
      kind: "teleport";
      location: Location;
    };

function executeCommands(actor: Location, commands: Command[]) {
  for (const command of commands) {
    switch (command.kind) {
      case "move":
        move(actor, command.direction);
        break;
      case "print":
        console.log(actor);
        break;
      case "teleport":
        actor.x = command.location.x;
        actor.y = command.location.y;
        break;
    }
  }
}

console.log(
  executeCommands({ x: 0, y: 0 }, [
    { kind: "move", direction: "up" },
    { kind: "print" },
    { kind: "teleport", location: { x: 10, y: 10 } },
    { kind: "print" },
  ])
);
// { x: 0, y: 1 }
// { x: 10, y: 10 }
