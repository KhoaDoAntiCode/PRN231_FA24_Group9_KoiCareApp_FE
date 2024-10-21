// export function mapStringToRole(Role: string): number {
//     switch (Role) {
//         case "Administrator":
//             return 0; // Administrator role mapped to 0
//         case "User":
//             return 1; // User role mapped to 1
//         case "Staff":
//             return 2; // Staff role mapped to 2
//         default:
//             throw new Error(`Unknown role: ${Role}`);
//     }
// }
import { Role } from "@/enum";

export function mapStringToRole(roleString: string): Role {
    switch (roleString.toLowerCase()) {
        case "user":
            return Role.User; // Map to Role.User (0)
        case "staff":
            return Role.Staff; // Map to Role.Staff (1)
        case "administrator":
            return Role.Administrator; // Map to Role.Administrator (2)
        default:
            throw new Error(`Unknown role: ${roleString}`);
    }
}
