import React from "react";
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
import { User, Mail, Lock, GraduationCap, ArrowRight } from "lucide-react";

const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eef1ff] via-[#e3e8ff] to-[#d6ddff] flex items-start justify-center p-4 pt-8">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-6" data-testid="register-header">
          <h1 className="text-2xl sm:text-4xl font-heading font-bold text-[#1f2a5a] flex items-center justify-center gap-2 mb-2">
            JOIN CODE 2 IDEA
            <GraduationCap className="w-10 h-10 text-[#3f51b5]" />
          </h1>
          <p className="text-[#3b4ba3] text-lg">
            Create your account to get started
          </p>
        </div>

        {/* Registration Card */}
        <Card
          className="shadow-2xl border-0 bg-white/80 backdrop-blur-md"
          data-testid="register-card"
        >
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-2xl font-heading font-bold text-[#1f2a5a]">
              Register
            </CardTitle>
            <CardDescription className="text-base text-[#3b4ba3]">
              Enter your details below
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              {/* Full Name */}
              <div className="space-y-1">
                <Label
                  htmlFor="name"
                  className="text-sm font-semibold text-[#1f2a5a]"
                >
                  Full Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="pl-11 h-11 bg-white border-gray-200 focus:border-[#3F51B5] focus:ring-2 focus:ring-[#3F51B5]/20"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1">
                <Label
                  htmlFor="email"
                  className="text-sm font-semibold text-[#1f2a5a]"
                >
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@college.edu"
                    className="pl-11 h-11 bg-white border-gray-200 focus:border-[#3F51B5] focus:ring-2 focus:ring-[#3F51B5]/20"
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
                    className="pl-11 h-11 bg-white border-gray-200 focus:border-[#3F51B5] focus:ring-2 focus:ring-[#3F51B5]/20"
                  />
                </div>
              </div>

              {/* Register Button */}
              <Button
                type="button"
                className="w-full h-12 bg-gradient-to-r from-[#3f51b5] via-[#5c6bc0] to-[#7986cb] text-white font-semibold text-base shadow-md hover:shadow-lg transition-all duration-200 mt-2"
              >
                <span className="flex items-center gap-2">
                  Register
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Button>
            </form>

            {/* Login Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Already have an account?{" "}
                <Button
                  variant="link"
                  onClick={() => navigate("/login")}
                  className="text-[#3F51B5] font-semibold p-0 h-auto"
                >
                  Sign In
                </Button>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;
