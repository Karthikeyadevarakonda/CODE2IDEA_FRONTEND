import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { User, Lock, GraduationCap } from "lucide-react";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eef1ff] via-[#e3e8ff] to-[#d6ddff] flex items-start justify-center p-4 pt-8">
      <div className="w-full max-w-md">
        {/* Logo/Header */}
        <div className="text-center mb-6" data-testid="login-header">
          <h1 className="text-2xl sm:text-4xl font-heading font-bold text-[#1f2a5a] flex items-center justify-center gap-2 mb-2">
            CODE 2 IDEA
            <GraduationCap className="w-10 h-10 text-[#3f51b5]" />
          </h1>
          <p className="text-[#3b4ba3] text-lg">
            Your Gateway for Inovative Ideas
          </p>
        </div>

        {/* Login Card */}
        <Card
          className="shadow-2xl border-0 bg-white/80 backdrop-blur-md"
          data-testid="login-card"
        >
          <CardHeader className="space-y-1 pb-4">
            <CardTitle className="text-2xl font-heading font-bold text-[#1f2a5a]">
              Welcome Back
            </CardTitle>
            <CardDescription className="text-base text-[#3b4ba3]">
              Enter your credentials to log in
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              {/* Username */}
              <div className="space-y-1">
                <Label
                  htmlFor="username"
                  className="text-sm font-semibold text-[#1f2a5a]"
                >
                  Username
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    className="pl-11 h-12 bg-white border-gray-200 focus:border-[#3f51b5] focus:ring-2 focus:ring-[#3f51b5]/20"
                    data-testid="username-input"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1">
                <Label
                  htmlFor="password"
                  className="text-sm font-semibold text-[#1f2a5a]"
                >
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="pl-11 h-12 bg-white border-gray-200 focus:border-[#3f51b5] focus:ring-2 focus:ring-[#3f51b5]/20"
                    data-testid="password-input"
                  />
                </div>
              </div>

              <Button
                type="button"
                className="w-full h-12 bg-gradient-to-r from-[#3f51b5] via-[#5c6bc0] to-[#7986cb] text-white font-semibold text-base shadow-md hover:shadow-lg transition-all duration-200"
                data-testid="login-button"
              >
                Log In
              </Button>
            </form>

            {/* Divider */}
            <div className="relative my-5">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white/80 px-2 text-[#3b4ba3] font-medium">
                  New here?
                </span>
              </div>
            </div>

            {/* Signup Link */}
            <Button
              type="button"
              variant="outline"
              className="w-full h-12 border-2 border-[#3f51b5] text-[#3f51b5] hover:bg-white/70 font-semibold"
              onClick={() => navigate("/register")}
              data-testid="signup-link"
            >
              Create Student Account
            </Button>
          </CardContent>
        </Card>

        <p className="text-center text-[#3b4ba3] text-sm mt-6">
          © 2025 CODE 2 IDEA. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
