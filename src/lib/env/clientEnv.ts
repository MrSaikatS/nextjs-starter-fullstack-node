import z from "zod";

const clientEnvSchema = z.object({});

const clientEnvVars = {};

export const clientEnv = clientEnvSchema.parse(clientEnvVars);
