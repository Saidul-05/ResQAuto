// lib/app.dart
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'core/theme.dart';
import 'providers/auth_provider.dart';
import 'providers/mechanic_provider.dart';
import 'routes/app_routes.dart';
import 'screens/home_screen.dart';
import 'screens/login_screen.dart';
import 'screens/map_screen.dart';

class ResQAutoApp extends StatelessWidget {
  const ResQAutoApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => AuthProvider()),
        ChangeNotifierProvider(create: (_) => MechanicProvider()),
      ],
      child: MaterialApp(
        title: 'ResQ Auto',
        theme: AppTheme.lightTheme,
        darkTheme: AppTheme.darkTheme,
        themeMode: ThemeMode.system,
        initialRoute: AppRoutes.home,
        routes: {
          AppRoutes.home: (context) => const HomeScreen(),
          AppRoutes.login: (context) => const LoginScreen(),
          AppRoutes.map: (context) => const MapScreen(),
        },
      ),
    );
  }
}
