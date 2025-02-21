// lib/screens/login_screen.dart
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../providers/auth_provider.dart';
import '../widgets/custom_button.dart';
import '../routes/app_routes.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({Key? key}) : super(key: key);
  
  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();
  
  @override
  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();
    super.dispose();
  }
  
  @override
  Widget build(BuildContext context) {
    final authProvider = Provider.of<AuthProvider>(context);
    
    return Scaffold(
      appBar: AppBar(title: const Text('Login')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              controller: _emailController,
              decoration: const InputDecoration(labelText: 'Email'),
            ),
            TextField(
              controller: _passwordController,
              decoration: const InputDecoration(labelText: 'Password'),
              obscureText: true,
            ),
            const SizedBox(height: 20),
            CustomButton(
              label: 'Login',
              onPressed: () async {
                await authProvider.signIn(
                  _emailController.text,
                  _passwordController.text,
                );
                if (authProvider.user != null) {
                  Navigator.pushReplacementNamed(context, AppRoutes.home);
                }
              },
            ),
            const SizedBox(height: 10),
            CustomButton(
              label: 'Sign Up',
              onPressed: () async {
                await authProvider.signUp(
                  _emailController.text,
                  _passwordController.text,
                );
                if (authProvider.user != null) {
                  Navigator.pushReplacementNamed(context, AppRoutes.home);
                }
              },
            ),
          ],
        ),
      ),
    );
  }
}
