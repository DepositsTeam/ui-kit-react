import Accordion from "./components/accordion";
import Alert from "./components/alert";
import AutoLayout from "./components/auto-layout";
import Avatar from "./components/avatar";
import Badge from "./components/badge";
import Banner from "./components/banner";
import Box from "./components/box";
import Button from "./components/button";
import Card from "./components/card";
import CardInputField from "./components/card-input-field";
import Checkbox from "./components/checkbox";
import Col from "./components/responsive-layout/Col.jsx";
import Counter from "./components/counter/Counter.jsx";
import CountryDropdown from "./components/country-dropdown";
import DatePicker from "./components/date-picker";
import { DarkModeContext } from "./components/providers/DarkModeProvider.jsx";
import DarkModeProvider from "./components/providers/DarkModeProvider.jsx";
import DebitCard from "./components/debit-card";
import DebitCardBalance from "./components/debit-card-balance";
import Dropdown from "./components/dropdown";
import FilePicker from "./components/file-picker";
import FilePickerInline from "./components/file-picker-inline";
import GridLayout from "./components/grid-layout";
import Heading from "./components/heading";
import Icon from "./components/icon";
import Loader from "./components/loader";
import Modal from "./components/modal";
import Pagination from "./components/pagination";
import PhoneField from "./components/phone-field";
import PinInput from "./components/pin-input";
import ProgressBar from "./components/progress-bar";
import Radio from "./components/radio";
import ResponsiveLayout from "./components/responsive-layout/ResponsiveLayout.jsx";
import Row from "./components/responsive-layout/Row.jsx";
import SelectField from "./components/select-field";
import Stepper from "./components/stepper";
import Switch from "./components/switch";
import Tab from "./components/tab";
import Table from "./components/table";
import TagDropdown from "./components/tag-dropdown";
import TagInput from "./components/tag-input";
import Text from "./components/text";
import TextArea from "./components/text-area";
import TextField from "./components/text-field";
import { ThemeContext } from "./components/providers/ThemeProvider.jsx";
import ThemeProvider from "./components/providers/ThemeProvider.jsx";
import { ToastContext } from "./components/providers/ToastProvider.jsx";
import ToastProvider from "./components/providers/ToastProvider.jsx";
import { usePushToast } from "./utils/hooks/usePushToast";
import { useUpdateTheme } from "./utils/hooks/useTheme.hook";
import { useUpdateDarkMode } from "./utils/hooks/useDarkMode.hook";
import { getTextColor, hexToRgbA } from "./utils/colorManager";
import {
  asteriskCardNo,
  asteriskCvv,
  asteriskExp,
  formatCardNo,
} from "./utils/debitCardUtils";

// import icons from "./components/icons";

import AddIcon from "./components/icons/Add.jsx";
import AddBookmarkIcon from "./components/icons/AddBookmark.jsx";
import AddCircleIcon from "./components/icons/AddCircle.jsx";
import AddFileIcon from "./components/icons/AddFile.jsx";
import AddItemIcon from "./components/icons/AddItem.jsx";
import AlarmIcon from "./components/icons/Alarm.jsx";
import AddUserIcon from "./components/icons/AddUser.jsx";
import AnnounceIcon from "./components/icons/Announce.jsx";
import AppsIcon from "./components/icons/Apps.jsx";
import ArrowDownIcon from "./components/icons/ArrowDown.jsx";
import ArrowDownLeftIcon from "./components/icons/ArrowDownLeft.jsx";
import ArrowDownRightIcon from "./components/icons/ArrowDownRight.jsx";
import ArrowLeftIcon from "./components/icons/ArrowLeft.jsx";
import ArrowRightIcon from "./components/icons/ArrowRight.jsx";
import ArrowUpIcon from "./components/icons/ArrowUp.jsx";
import ArrowUpLeftIcon from "./components/icons/ArrowUpLeft.jsx";
import ArrowUpRightIcon from "./components/icons/ArrowUpRight.jsx";
import AttachmentIcon from "./components/icons/Attachment.jsx";
import AvatarIcon from "./components/icons/Avatar.jsx";
import BackwardIcon from "./components/icons/Backward.jsx";
import BankIcon from "./components/icons/Bank.jsx";
import BarChartIcon from "./components/icons/BarChart.jsx";
import BasketIcon from "./components/icons/Basket.jsx";
import BendLeftIcon from "./components/icons/BendLeft.jsx";
import BendRightIcon from "./components/icons/BendRight.jsx";
import BoltIcon from "./components/icons/Bolt.jsx";
import BookIcon from "./components/icons/Book.jsx";
import BookmarkIcon from "./components/icons/Bookmark.jsx";
import BriefcaseIcon from "./components/icons/Briefcase.jsx";
import CalendarIcon from "./components/icons/Calendar.jsx";
import CameraIcon from "./components/icons/Camera.jsx";
import CardIcon from "./components/icons/Card.jsx";
import CartIcon from "./components/icons/Cart.jsx";
import CashIcon from "./components/icons/Cash.jsx";
import CenterAlignIcon from "./components/icons/CenterAlign.jsx";
import CertificateIcon from "./components/icons/Certificate.jsx";
import Certificate2Icon from "./components/icons/Certificate2.jsx";
import ChartIcon from "./components/icons/Chart.jsx";
import CheckIcon from "./components/icons/Check.jsx";
import CheckCircleIcon from "./components/icons/CheckCircle.jsx";
import ChevronArrowDownIcon from "./components/icons/ChevronArrowDown.jsx";
import ChevronArrowLeftIcon from "./components/icons/ChevronArrowLeft.jsx";
import ChevronArrowRightIcon from "./components/icons/ChevronArrowRight.jsx";
import ChevronArrowUpIcon from "./components/icons/ChevronArrowUp.jsx";
import ChevronFilledDownIcon from "./components/icons/ChevronFilledDown.jsx";
import ChevronFilledLeftIcon from "./components/icons/ChevronFilledLeft.jsx";
import ChevronFilledRightIcon from "./components/icons/ChevronFilledRight.jsx";
import ChevronFilledUpIcon from "./components/icons/ChevronFilledUp.jsx";
import CircleIcon from "./components/icons/Circle.jsx";
import CloseIcon from "./components/icons/Close.jsx";
import CloseCircleIcon from "./components/icons/CloseCircle.jsx";
import CloudIcon from "./components/icons/Cloud.jsx";
import CloudDownloadIcon from "./components/icons/CloudDownload.jsx";
import CloudFlashIcon from "./components/icons/CloudFlash.jsx";
import CloudRainIcon from "./components/icons/CloudRain.jsx";
import CloudUploadIcon from "./components/icons/CloudUpload.jsx";
import CommandIcon from "./components/icons/Command.jsx";
import CompanyIcon from "./components/icons/Company.jsx";
import CompassIcon from "./components/icons/Compass.jsx";
import CompressIcon from "./components/icons/Compress.jsx";
import Compress2Icon from "./components/icons/Compress2.jsx";
import CopyIcon from "./components/icons/Copy.jsx";
import CropIcon from "./components/icons/Crop.jsx";
import CrownIcon from "./components/icons/Crown.jsx";
import CutIcon from "./components/icons/Cut.jsx";
import DecreaseIcon from "./components/icons/Decrease.jsx";
import Decrease2Icon from "./components/icons/Decrease2.jsx";
import DeleteIcon from "./components/icons/Delete.jsx";
import DepositsIcon from "./components/icons/Deposits.jsx";
import DetailsIcon from "./components/icons/Details.jsx";
import DialIcon from "./components/icons/Dial.jsx";
import DialOffIcon from "./components/icons/DialOff.jsx";
import DisabledIcon from "./components/icons/Disabled.jsx";
import DislikeIcon from "./components/icons/Dislike.jsx";
import DocumentIcon from "./components/icons/Document.jsx";
import DoubleCheckIcon from "./components/icons/DoubleCheck.jsx";
import DownloadIcon from "./components/icons/Download.jsx";
import DropIcon from "./components/icons/Drop.jsx";
import EditIcon from "./components/icons/Edit.jsx";
import Edit2Icon from "./components/icons/Edit2.jsx";
import ErrorIcon from "./components/icons/Error.jsx";
import ErrorCircleIcon from "./components/icons/ErrorCircle.jsx";
import ExitFullScreenIcon from "./components/icons/ExitFullScreen.jsx";
import ExpandIcon from "./components/icons/Expand.jsx";
import Expand2Icon from "./components/icons/Expand2.jsx";
import ExternalLinkIcon from "./components/icons/ExternalLink.jsx";
import EyeIcon from "./components/icons/Eye.jsx";
import EyeOffIcon from "./components/icons/EyeOff.jsx";
import FileIcon from "./components/icons/File.jsx";
import FilterIcon from "./components/icons/Filter.jsx";
import FlagIcon from "./components/icons/Flag.jsx";
import FlameIcon from "./components/icons/Flame.jsx";
import FlashIcon from "./components/icons/Flash.jsx";
import FolderIcon from "./components/icons/Folder.jsx";
import ForwardIcon from "./components/icons/Forward.jsx";
import FunnelIcon from "./components/icons/Funnel.jsx";
import FullScreenIcon from "./components/icons/FullScreen.jsx";
import GemIcon from "./components/icons/Gem.jsx";
import GiftIcon from "./components/icons/Gift.jsx";
import GitlabIcon from "./components/icons/Gitlab.jsx";
import GlobeIcon from "./components/icons/Globe.jsx";
import GridIcon from "./components/icons/Grid.jsx";
import HeartIcon from "./components/icons/Heart.jsx";
import HeartFilledIcon from "./components/icons/HeartFilled.jsx";
import HomeIcon from "./components/icons/Home.jsx";
import ImageIcon from "./components/icons/Image.jsx";
import InboxIcon from "./components/icons/Inbox.jsx";
import IncreaseIcon from "./components/icons/Increase.jsx";
import Increase2Icon from "./components/icons/Increase2.jsx";
import InfoIcon from "./components/icons/Info.jsx";
import InfoOutlineIcon from "./components/icons/InfoOutline.jsx";
import JustifyAlignIcon from "./components/icons/JustifyAlign.jsx";
import KeyIcon from "./components/icons/Key.jsx";
import LeftAlignIcon from "./components/icons/LeftAlign.jsx";
import LikeIcon from "./components/icons/Like.jsx";
import LinkIcon from "./components/icons/Link.jsx";
import ListIcon from "./components/icons/List.jsx";
import List2Icon from "./components/icons/List2.jsx";
import LocationIcon from "./components/icons/Location.jsx";
import Location2Icon from "./components/icons/Location2.jsx";
import Location3Icon from "./components/icons/Location3.jsx";
import LockIcon from "./components/icons/Lock.jsx";
import LoginIcon from "./components/icons/Login.jsx";
import Login2Icon from "./components/icons/Login2.jsx";
import LogoutIcon from "./components/icons/Logout.jsx";
import Logout2Icon from "./components/icons/Logout2.jsx";
import MapIcon from "./components/icons/Map.jsx";
import MenuIcon from "./components/icons/Menu.jsx";
import Menu2Icon from "./components/icons/Menu2.jsx";
import Menu3Icon from "./components/icons/Menu3.jsx";
import Menu4Icon from "./components/icons/Menu4.jsx";
import Menu5Icon from "./components/icons/Menu5.jsx";
import Menu6Icon from "./components/icons/Menu6.jsx";
import Menu7Icon from "./components/icons/Menu7.jsx";
import Menu8Icon from "./components/icons/Menu8.jsx";
import MenuHIcon from "./components/icons/MenuH.jsx";
import MenuVIcon from "./components/icons/MenuV.jsx";
import MessageIcon from "./components/icons/Message.jsx";
import MicIcon from "./components/icons/Mic.jsx";
import MicOffIcon from "./components/icons/MicOff.jsx";
import MoonIcon from "./components/icons/Moon.jsx";
import MoveIcon from "./components/icons/Move.jsx";
import MusicIcon from "./components/icons/Music.jsx";
import MuteIcon from "./components/icons/Mute.jsx";
import NetworkIcon from "./components/icons/Network.jsx";
import NextIcon from "./components/icons/Next.jsx";
import NotificationBellIcon from "./components/icons/NotificationBell.jsx";
import PauseIcon from "./components/icons/Pause.jsx";
import PieIcon from "./components/icons/Pie.jsx";
import PinIcon from "./components/icons/Pin.jsx";
import PlayCircleIcon from "./components/icons/PlayCircle.jsx";
import PowerIcon from "./components/icons/Power.jsx";
import PreviousIcon from "./components/icons/Previous.jsx";
import PrintIcon from "./components/icons/Print.jsx";
import ProfileIcon from "./components/icons/Profile.jsx";
import PulseIcon from "./components/icons/Pulse.jsx";
import RefreshIcon from "./components/icons/Refresh.jsx";
import ReloadIcon from "./components/icons/Reload.jsx";
import RightAlignIcon from "./components/icons/RightAlign.jsx";
import RocketIcon from "./components/icons/Rocket.jsx";
import RotateLeftIcon from "./components/icons/RotateLeft.jsx";
import RotateRightIcon from "./components/icons/RotateRight.jsx";
import ScanCardIcon from "./components/icons/ScanCard.jsx";
import ScrollIcon from "./components/icons/Scroll.jsx";
import SearchIcon from "./components/icons/Search.jsx";
import SelectItemIcon from "./components/icons/SelectItem.jsx";
import SendIcon from "./components/icons/Send.jsx";
import SettingsIcon from "./components/icons/Settings.jsx";
import ShareIcon from "./components/icons/Share.jsx";
import ShieldIcon from "./components/icons/Shield.jsx";
import ShieldCheckIcon from "./components/icons/ShieldCheck.jsx";
import ShieldFlashIcon from "./components/icons/ShieldFlash.jsx";
import ShopIcon from "./components/icons/Shop.jsx";
import SortIcon from "./components/icons/Sort.jsx";
import Sort2Icon from "./components/icons/Sort2.jsx";
import SortAscendingIcon from "./components/icons/SortAscending.jsx";
import SortDescendingIcon from "./components/icons/SortDescending.jsx";
import SoundIcon from "./components/icons/Sound.jsx";
import StackIcon from "./components/icons/Stack.jsx";
import StaffIcon from "./components/icons/Staff.jsx";
import StarIcon from "./components/icons/Star.jsx";
import StopCircleIcon from "./components/icons/StopCircle.jsx";
import StopwatchIcon from "./components/icons/Stopwatch.jsx";
import SunIcon from "./components/icons/Sun.jsx";
import SupportIcon from "./components/icons/Support.jsx";
import TableIcon from "./components/icons/Table.jsx";
import TagIcon from "./components/icons/Tag.jsx";
import TextIconIcon from "./components/icons/Text.jsx";
import TimeIcon from "./components/icons/Time.jsx";
import TransferIcon from "./components/icons/Transfer.jsx";
import TrophyIcon from "./components/icons/Trophy.jsx";
import UnlockIcon from "./components/icons/Unlock.jsx";
import UploadIcon from "./components/icons/Upload.jsx";
import VerticalArrowsIcon from "./components/icons/VerticalArrows.jsx";
import VideoIcon from "./components/icons/Video.jsx";
import VideoOffIcon from "./components/icons/VideoOff.jsx";
import VoucherIcon from "./components/icons/Voucher.jsx";
import WalletIcon from "./components/icons/Wallet.jsx";
import WarningIcon from "./components/icons/Warning.jsx";
import WaveIcon from "./components/icons/Wave.jsx";
import WithdrawIcon from "./components/icons/Withdraw.jsx";

/// IMPORT FILLED ICONS
import CloudUploadFilledIcon from "./components/icons/filled/CloudUploadFilledIcon.jsx";

export {
  Accordion,
  Alert,
  AutoLayout,
  Avatar,
  Badge,
  Banner,
  Box,
  Button,
  Card,
  CardInputField,
  Checkbox,
  Col,
  Counter,
  CountryDropdown,
  DatePicker,
  DarkModeContext,
  DarkModeProvider,
  DebitCard,
  DebitCardBalance,
  Dropdown,
  FilePicker,
  FilePickerInline,
  GridLayout,
  Heading,
  // icons,
  Icon,
  Loader,
  Modal,
  Pagination,
  PhoneField,
  PinInput,
  ProgressBar,
  Radio,
  ResponsiveLayout,
  Row,
  SelectField,
  Stepper,
  Switch,
  Tab,
  Table,
  TagDropdown,
  TagInput,
  Text,
  TextArea,
  TextField,
  ThemeContext,
  ThemeProvider,
  ToastContext,
  ToastProvider,
  getTextColor,
  hexToRgbA,
  useUpdateTheme,
  useUpdateDarkMode,
  usePushToast,
  asteriskCardNo,
  asteriskCvv,
  asteriskExp,
  formatCardNo,
};

export {
  AddIcon,
  AddBookmarkIcon,
  AddCircleIcon,
  AddFileIcon,
  AddItemIcon,
  AddUserIcon,
  AlarmIcon,
  AnnounceIcon,
  AppsIcon,
  ArrowDownIcon,
  ArrowDownLeftIcon,
  ArrowDownRightIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  ArrowUpLeftIcon,
  ArrowUpRightIcon,
  AttachmentIcon,
  AvatarIcon,
  BackwardIcon,
  BankIcon,
  BarChartIcon,
  BasketIcon,
  BendLeftIcon,
  BendRightIcon,
  BoltIcon,
  BookIcon,
  BookmarkIcon,
  BriefcaseIcon,
  CalendarIcon,
  CameraIcon,
  CardIcon,
  CartIcon,
  CashIcon,
  CenterAlignIcon,
  CertificateIcon,
  Certificate2Icon,
  ChartIcon,
  CheckIcon,
  CheckCircleIcon,
  ChevronArrowDownIcon,
  ChevronArrowLeftIcon,
  ChevronArrowRightIcon,
  ChevronArrowUpIcon,
  ChevronFilledDownIcon,
  ChevronFilledLeftIcon,
  ChevronFilledRightIcon,
  ChevronFilledUpIcon,
  CircleIcon,
  CloseIcon,
  CloseCircleIcon,
  CloudIcon,
  CloudDownloadIcon,
  CloudFlashIcon,
  CloudRainIcon,
  CloudUploadIcon,
  CommandIcon,
  CompanyIcon,
  CompassIcon,
  CompressIcon,
  Compress2Icon,
  CopyIcon,
  CropIcon,
  CrownIcon,
  CutIcon,
  DecreaseIcon,
  Decrease2Icon,
  DeleteIcon,
  DepositsIcon,
  DetailsIcon,
  DialIcon,
  DialOffIcon,
  DisabledIcon,
  DislikeIcon,
  DocumentIcon,
  DoubleCheckIcon,
  DownloadIcon,
  DropIcon,
  EditIcon,
  Edit2Icon,
  ErrorIcon,
  ErrorCircleIcon,
  ExitFullScreenIcon,
  ExpandIcon,
  Expand2Icon,
  ExternalLinkIcon,
  EyeIcon,
  EyeOffIcon,
  FileIcon,
  FilterIcon,
  FlagIcon,
  FlameIcon,
  FlashIcon,
  FolderIcon,
  ForwardIcon,
  FunnelIcon,
  FullScreenIcon,
  GemIcon,
  GiftIcon,
  GitlabIcon,
  GlobeIcon,
  GridIcon,
  HeartIcon,
  HeartFilledIcon,
  HomeIcon,
  ImageIcon,
  InboxIcon,
  IncreaseIcon,
  Increase2Icon,
  InfoIcon,
  InfoOutlineIcon,
  JustifyAlignIcon,
  KeyIcon,
  LeftAlignIcon,
  LikeIcon,
  LinkIcon,
  ListIcon,
  List2Icon,
  LocationIcon,
  Location2Icon,
  Location3Icon,
  LockIcon,
  LoginIcon,
  Login2Icon,
  LogoutIcon,
  Logout2Icon,
  MapIcon,
  MenuIcon,
  Menu2Icon,
  Menu3Icon,
  Menu4Icon,
  Menu5Icon,
  Menu6Icon,
  Menu7Icon,
  Menu8Icon,
  MenuHIcon,
  MenuVIcon,
  MessageIcon,
  MicIcon,
  MicOffIcon,
  MoonIcon,
  MoveIcon,
  MusicIcon,
  MuteIcon,
  NetworkIcon,
  NextIcon,
  NotificationBellIcon,
  PauseIcon,
  PieIcon,
  PinIcon,
  PlayCircleIcon,
  PowerIcon,
  PreviousIcon,
  PrintIcon,
  ProfileIcon,
  PulseIcon,
  RefreshIcon,
  ReloadIcon,
  RightAlignIcon,
  RocketIcon,
  RotateLeftIcon,
  RotateRightIcon,
  ScanCardIcon,
  ScrollIcon,
  SearchIcon,
  SelectItemIcon,
  SendIcon,
  SettingsIcon,
  ShareIcon,
  ShieldIcon,
  ShieldCheckIcon,
  ShieldFlashIcon,
  ShopIcon,
  SortIcon,
  Sort2Icon,
  SortAscendingIcon,
  SortDescendingIcon,
  SoundIcon,
  StackIcon,
  StaffIcon,
  StarIcon,
  StopCircleIcon,
  StopwatchIcon,
  SunIcon,
  SupportIcon,
  TableIcon,
  TagIcon,
  TextIconIcon,
  TimeIcon,
  TransferIcon,
  TrophyIcon,
  UnlockIcon,
  UploadIcon,
  VerticalArrowsIcon,
  VideoIcon,
  VideoOffIcon,
  VoucherIcon,
  WalletIcon,
  WarningIcon,
  WaveIcon,
  WithdrawIcon,
};

export { CloudUploadFilledIcon };
