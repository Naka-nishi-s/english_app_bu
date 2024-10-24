import withAuth from "next-auth/middleware";

export default withAuth(function middleware(req) {}, {
  callbacks: {
    authorized: ({ req, token }) => {
      console.log("Middlewareを通っている");
      console.log(token);
      if (req.nextUrl.pathname.startsWith("/nice") && token === null) {
        return false;
      }
      return true;
    },
  },
});
