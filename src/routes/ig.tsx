import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/ig")({
  beforeLoad: () => {
    throw redirect({
      href: "/?utm_source=instagram&utm_medium=dm&utm_campaign=reel_herramienta",
      statusCode: 302,
    });
  },
});
