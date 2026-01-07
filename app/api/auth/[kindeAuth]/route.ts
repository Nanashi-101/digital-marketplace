import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

// 🔥 prevent build-time execution
export const dynamic = "force-dynamic";

export const GET = handleAuth();
