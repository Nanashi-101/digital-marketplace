import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

// 🔥 VERY IMPORTANT: prevent static prerendering
export const dynamic = "force-dynamic";

export const GET = handleAuth();
