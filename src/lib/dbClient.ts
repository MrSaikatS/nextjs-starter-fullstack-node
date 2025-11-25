import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../../generated/prisma/client";
import { serverEnv } from "./env/serverEnv";

const globalForPrisma = global as unknown as {
	prisma: PrismaClient;
};

const adapter = new PrismaBetterSqlite3({
	url: serverEnv.DATABASE_URL,
});

const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

export default prisma;
