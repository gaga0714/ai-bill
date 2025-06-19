# 项目配置
```sh
npx create-expo-app@latest mobile
cd mobile
npm run ios
```

# 安装tailwind css：

https://www.nativewind.dev/docs/getting-started/installation

```sh
npm install nativewind react-native-reanimated@~3.17.4 react-native-safe-area-context@5.4.0
npm install -D tailwindcss@^3.4.17 prettier-plugin-tailwindcss@^0.5.11
```

在`app/_layout.tsx`里加上`import "./global.css";`

`rnfe`快捷键打开：扩展es7+

# 数据库 jwt token
supabase auth expo

quickstart->user management starter

用asyncStorage存储jwt的token

版本冲突解决：
```sh
npm uninstall react-native-safe-area-context
expo install react-native-safe-area-context@~4.5.0
npx expo install @supabase/supabase-js @react-native-async-storage/async-storage @rneui/themed
```


每次拿token都要useEffect操作=》改进：
zustand 状态管理工具

