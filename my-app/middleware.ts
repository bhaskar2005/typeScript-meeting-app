import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const route_Ki_Protected_A6e = createRouteMatcher(["/", "/meeting(.*)"]);
export default clerkMiddleware((auth, req) => {
  if (route_Ki_Protected_A6e(req)) {
    auth().protect();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
