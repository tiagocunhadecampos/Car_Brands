export type RootStackParamList = {
  SignIn: undefined;
  Home: undefined;
  ModelScreen: {
    brandCode: string;
    brandName: string;
  };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
