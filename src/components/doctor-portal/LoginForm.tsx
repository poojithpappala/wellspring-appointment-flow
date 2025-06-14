
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Lock, Mail, Eye, EyeOff } from "lucide-react";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormData = z.infer<typeof loginSchema>;

interface LoginFormProps {
  onLoginSuccess: () => void;
}

const HARDCODED_EMAIL = "doctor@example.com";
const HARDCODED_PASSWORD = "Wellness123";
const MAX_ATTEMPTS = 3;

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    if (isLocked) return;

    if (data.email === HARDCODED_EMAIL && data.password === HARDCODED_PASSWORD) {
      onLoginSuccess();
      setLoginError(null);
      setLoginAttempts(0);
    } else {
      const newAttempts = loginAttempts + 1;
      setLoginAttempts(newAttempts);
      setLoginError("Incorrect email or password.");
      if (newAttempts >= MAX_ATTEMPTS) {
        setIsLocked(true);
        setLoginError("Too many failed login attempts. Please refresh the page to try again.");
      }
    }
  };

  return (
    <div className="max-w-md mx-auto bg-card border border-border p-8 md:p-12 rounded-2xl shadow-2xl">
      <h2 className="text-3xl font-bold text-foreground mb-2 text-center leading-heading">Doctor Portal</h2>
      <p className="text-center text-muted-foreground mb-8">Sign in to access your dashboard</p>
      
      {/* Demo Credentials Info */}
      <div className="mb-6 p-4 bg-muted rounded-lg border">
        <h3 className="text-sm font-semibold text-foreground mb-2">Demo Credentials:</h3>
        <p className="text-xs text-muted-foreground">Email: doctor@example.com</p>
        <p className="text-xs text-muted-foreground">Password: Wellness123</p>
      </div>

      {isLocked && (
        <Alert variant="destructive" className="mb-6">
          <Lock className="h-5 w-5" />
          <AlertTitle>Account Locked</AlertTitle>
          <AlertDescription>
            Too many failed login attempts. Please refresh the page to try again.
          </AlertDescription>
        </Alert>
      )}
      {loginError && !isLocked && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-5 w-5" />
          <AlertTitle>Login Failed</AlertTitle>
          <AlertDescription>{loginError}</AlertDescription>
        </Alert>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <Label htmlFor="email-login" className="form-label">
            <Mail className="inline w-4 h-4 mr-1" />
            Email Address *
          </Label>
          <Input 
            id="email-login" 
            type="email" 
            {...register('email')} 
            className="input-field" 
            placeholder="Enter your email address"
            disabled={isLocked} 
            aria-required="true" 
            aria-invalid={!!errors.email} 
          />
          {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <Label htmlFor="password-login" className="form-label">
            <Lock className="inline w-4 h-4 mr-1" />
            Password *
          </Label>
          <div className="relative">
            <Input 
              id="password-login" 
              type={showPassword ? "text" : "password"} 
              {...register('password')} 
              className="input-field pr-12" 
              placeholder="Enter your password"
              disabled={isLocked} 
              aria-required="true" 
              aria-invalid={!!errors.password} 
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
              disabled={isLocked}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-muted-foreground" />
              ) : (
                <Eye className="h-5 w-5 text-muted-foreground" />
              )}
            </button>
          </div>
          {errors.password && <p className="text-sm text-destructive mt-1">{errors.password.message}</p>}
        </div>
        <Button type="submit" className="w-full btn-primary py-3 text-lg" disabled={isLocked} aria-label="Sign in to doctor portal">
          {isLocked ? 'Account Locked' : 'Sign In'}
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
