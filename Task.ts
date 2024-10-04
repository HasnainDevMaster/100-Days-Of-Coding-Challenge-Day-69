// 100 Days Of Coding Challenge!

/* Day-69 Task:
Learn about TypeScript enums by using the following guide and coding along with the examples provided in it:

Enums in TypeScript https://github.com/AsharibAli/100-days-of-code/blob/main/day-69/TS-Enums/README.md */

//-----------------------------------------------------------------------------------------------------------------------------------------

/* TypeScript enums (short for "enumerations") are a way to define a set of named constants that can represent distinct values.
This is especially useful when working with values that have a well-defined list of options,
such as directions (north, south, east, west), roles (admin, user, guest), or statuses (active, inactive, pending).*/

// Enums allow you to define both numeric and string values, providing a clear, readable alternative to hardcoding values in your code.

// There are two main types of enums:

// 1. Numeric Enums:
// By default, enums in TypeScript are numeric, starting from 0, unless specified otherwise.

enum Direction {
  North,
  South,
  East,
  West,
}

let currentDirection = Direction.North;
console.log(currentDirection); // Output: 0

// In this example, the Direction enum has four possible values, and TypeScript automatically assigns 0 to North, 1 to South, and so on.

// You can also specify custom values:

enum Status {
  Active = 1,
  Inactive,
  Pending,
}

console.log(Status.Pending); // Output: 3

// Here, Active is explicitly assigned the value 1, and TypeScript increments the rest (Inactive = 2, Pending = 3).

//--------------------------------------------------------------------------------------------------------------------------------------------

// 2. String Enums:
// String enums allow you to assign string values to each member, ensuring more human-readable code.

enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}

let userRole = Role.User;
console.log(userRole); // Output: "USER"

// Benefits of Enums:

/* Improved Readability: Enums give meaningful names to numeric or string constants, making your code easier to understand.

Type Safety: TypeScript enforces that values assigned to variables of enum type match the predefined set of enum members.

Maintainability: By centralizing constants in enums, it becomes easier to update and manage values across the codebase. */

// Enums in TypeScript are powerful tools for handling fixed sets of values in a more organized and structured way.
