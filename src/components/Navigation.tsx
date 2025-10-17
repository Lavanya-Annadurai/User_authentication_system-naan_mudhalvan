import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, LogIn, UserPlus } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-glass border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
            <Shield className="h-6 w-6 text-primary" />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              SecureAuth
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            {location.pathname !== "/login" && (
              <Button
                variant="ghost"
                asChild
                className="transition-smooth hover:text-primary"
              >
                <Link to="/login" className="flex items-center space-x-2">
                  <LogIn className="h-4 w-4" />
                  <span>Login</span>
                </Link>
              </Button>
            )}
            
            {location.pathname !== "/signup" && (
              <Button
                variant="primary"
                asChild
                className="bg-gradient-primary hover-glow transition-spring"
              >
                <Link to="/signup" className="flex items-center space-x-2">
                  <UserPlus className="h-4 w-4" />
                  <span>Sign Up</span>
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;