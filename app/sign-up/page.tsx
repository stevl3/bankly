import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Github } from "lucide-react";
import { GradientButton } from "@/components/ui/button-gradient";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-2 mb-8">
          <div className="w-10 h-10 bg-gradient-to-r from-[hsl(47.9,95.8%,53.1%)] to-[hsl(36,100%,50%)] rounded-lg flex items-center justify-center">
            <span className="text-slate-900 font-bold">H</span>
          </div>
          <span className="text-white font-semibold text-2xl">Horizon</span>
        </div>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-xl text-white">
              Create an account
            </CardTitle>
            <CardDescription className="text-slate-400">
              Get started with your free account today
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Github Button */}
            <Button
              variant="outline"
              className="w-full border-slate-600 text-slate-300 hover:bg-slate-700 mb-4"
            >
              <Github className="mr-2 h-4 w-4" />
              Continue with Github
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full bg-slate-600" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-slate-800 px-2 text-slate-400">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Sign Up Form */}
            <form className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-slate-300">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-slate-300">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-300">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-slate-300">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" className="border-slate-600" />
                <Label htmlFor="terms" className="text-sm text-slate-300">
                  I agree to the{" "}
                  <Link
                    href="#"
                    className="text-[hsl(47.9,95.8%,53.1%)] hover:text-[hsl(47.9,95.8%,45%)]"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="#"
                    className="text-[hsl(47.9,95.8%,53.1%)] hover:text-[hsl(47.9,95.8%,45%)]"
                  >
                    Privacy Policy
                  </Link>
                </Label>
              </div>

              <Link href="/dashboard">
                <GradientButton className="w-full">
                  Create Account
                </GradientButton>
              </Link>
            </form>

            <div className="mt-4 text-center">
              <span className="text-slate-400">Already have an account? </span>
              <Link
                href="/sign-in"
                className="text-[hsl(47.9,95.8%,53.1%)] hover:text-[hsl(47.9,95.8%,45%)]"
              >
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
