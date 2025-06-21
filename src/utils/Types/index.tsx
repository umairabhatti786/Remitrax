import { StyleProp, ViewStyle, RefreshControlProps, TextStyle } from "react-native";

//  Custom text props
export type TextType = {
  color?: string;
  size?: number;
  fontFam?: string;
  text?: any;
  style?: StyleProp<TextStyle>; // Style for the screen container
  lineHeight?: number;
  numberOfLines?: number;
  fontWeight?: string;
  textDecorationLine?: string;
  label?: any;
  textTransform?: any;
};
//  Custom button props
export type SwiperButtonType = {
  title?:string,
  onSwipe?:()=>void,
  bgColor?:string,
  disable?:boolean,
};
export type ButtonProps = {
  text?: string;
  onPress?: () => void;
  width?: any;
  height?: number;
  size?: number;
  fontFam?: any;
  borderRadius?: number;
  style?: StyleProp<ViewStyle>; // Style for the screen container
  bgColor?: any;
  textColor?: any;
  borderColor?: any;
  disable?: boolean;
  borderWidth?: number;
  paddingHorizontal?: number;
  isLoading?: any;
  fontWeight?:string,
  colors?:any
  children?:any

};
//  Custom input props

export type InputProps = {
  placeholder?: string;
  error?: string;
  secureTextEntry?: boolean;
  rightSource?: any;
  keyboard?: any;
  props?: any;
  value?: any;
  onChangeText?: any;
  onBlur?: any;
  onShowPassword?: any;
  editable?: boolean;
  color?: string;
  maxLength?: number;
  leftSource?: any;
  fontWeight?: any;
  multiline?: boolean;
  height?: any;
  width?: any;
  fontSize?: any;
  placeholderTextColor?: any;
  borderWidth?: any;
  borderRadius?: any;
  backgroundColor?: any;
  borderColor?: any;
  rightSourceSize?: any;
  textAlign?: any;
  textAlignVertical?: any;
  paddingTop?: any;
  onSubmitEditing?: () => void;
  mandatory?:boolean
  label?:string
  complusory?:boolean
  labelSize?:any
  onFocus?:any
  focusedInput?:any
  setFocusedInput?:any
  inputKey?:string,
  disable?:boolean,
  rightIconPress?:any
  defaultValue?:any
  selection?:any
  onSelectionChange?:any
  textColor?:any
  onRightSource?:any
};
//  Custom screen layout props

export type ScreenType = {
  bgColor?: string; // Background color
  isScrollEnabled?: boolean; // Indicates if scrolling is enabled
  ScrollRef?: React.Ref<any>; // Reference to the scroll view
  onScroll?: (event: any) => void; // Scroll event handler
  onPress?: () => void;
  style?: StyleProp<ViewStyle>; // Style for the screen container
  children?: React.ReactNode; // Children components
  refreshControl?: React.ReactElement<RefreshControlProps>; // Refresh control component
};


export type AppStackParamList = {
  GetStarted:undefined
  LoginScreen:undefined
  SignupScreen:undefined
  YourIdentity:undefined
  ProofOfResidency:undefined
  PassportPhotoInstruction:undefined
};


export type CoachesAppStackParamList = {

  CoachesBottomTab:undefined
  AssignNewTask:undefined
  StudentProfile:undefined
  MyAssignedTask:undefined
  AIChatBoot:undefined
 
};

export type AdminAppStackParamList = {

  AdminBottomTab:undefined
  AssignNewTask:undefined
  StudentProfile:undefined
  MyAssignedTask:undefined
  AIChatBoot:undefined
  CoachProfile:undefined
  TasksOverview:undefined
  AddNewReward:undefined
  ChangePassword:undefined
  ManageInformation:undefined
  EditProfileScreen:undefined
  NotificationSetting:undefined
  BrandPartners:undefined
  BrandPartnersProfile:undefined
  AddNewBrandPartner:undefined
  BannersAndPosters:undefined
  AddNewBanner:undefined
  AddNewPosterQRCampaign:undefined
  Analytics:undefined
 
};

export type ParentsAppStackParamList = {

  ParentsBottomTab:undefined
  AssignNewTask:undefined
  StudentProfile:undefined
  MyAssignedTask:undefined
  AIChatBoot:undefined
  ProfileScreen:undefined
 
};
