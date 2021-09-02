import React from 'react';
import UIThemeProvider from './base';
// TODO: https://docs.expo.dev/guides/using-custom-fonts/#using-a-google-font
import { KeyboardAvoidingView, Platform } from 'react-native';


interface UIThemeProviderNativeProps {
  children: React.ReactNode;
}

export default function UIThemeProviderNative({ children }: UIThemeProviderNativeProps) {
  return (
    <UIThemeProvider platform="mobile">
      <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          // keyboardVerticalOffset={Platform.OS == 'ios' ? 30 : 200}
          style={{ flex: 1 }}
      >
      {children}
      </KeyboardAvoidingView>
    </UIThemeProvider>
  );
}
