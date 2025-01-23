import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;
prisma = new PrismaClient();

// TODO @kenzie handle if we ever have diff environments
// if (process.env.NODE_ENV === 'production') {
//     prisma = new PrismaClient()
// } else {
//   if (!global.prisma) {
//     global.prisma = new PrismaClient()
//   }
//   prisma = global.prisma
// }

export default prisma;
