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
import Col from "./components/responsive-layout/Col";
import Counter from "./components/counter/Counter";
import CountryDropdown from "./components/country-dropdown";
import DatePicker from "./components/date-picker";
import { DarkModeContext } from "./components/providers/DarkModeProvider";
import DarkModeProvider from "./components/providers/DarkModeProvider";
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
import ResponsiveLayout from "./components/responsive-layout/ResponsiveLayout";
import Row from "./components/responsive-layout/Row";
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
import { ThemeContext } from "./components/providers/ThemeProvider";
import ThemeProvider from "./components/providers/ThemeProvider";
import Toast from "./components/toast";
import { ToastContext } from "./components/providers/ToastProvider";
import ToastProvider from "./components/providers/ToastProvider";
import { getTextColor, hexToRgbA } from "./utils/colorManager";

// import icons from "./components/icons";

import AddIcon from "./components/icons/Add";
import AddBookmarkIcon from "./components/icons/AddBookmark";
import AddCircleIcon from "./components/icons/AddCircle";
import AddFileIcon from "./components/icons/AddFile";
import AddItemIcon from "./components/icons/AddItem";
import AlarmIcon from "./components/icons/Alarm";
import AddUserIcon from "./components/icons/AddUser";
import AnnounceIcon from "./components/icons/Announce";
import AppsIcon from "./components/icons/Apps";
import ArrowDownIcon from "./components/icons/ArrowDown";
import ArrowDownLeftIcon from "./components/icons/ArrowDownLeft";
import ArrowDownRightIcon from "./components/icons/ArrowDownRight";
import ArrowLeftIcon from "./components/icons/ArrowLeft";
import ArrowRightIcon from "./components/icons/ArrowRight";
import ArrowUpIcon from "./components/icons/ArrowUp";
import ArrowUpLeftIcon from "./components/icons/ArrowUpLeft";
import ArrowUpRightIcon from "./components/icons/ArrowUpRight";
import AttachmentIcon from "./components/icons/Attachment";
import AvatarIcon from "./components/icons/Avatar";
import BackwardIcon from "./components/icons/Backward";
import BankIcon from "./components/icons/Bank";
import BarChartIcon from "./components/icons/BarChart";
import BasketIcon from "./components/icons/Basket";
import BendLeftIcon from "./components/icons/BendLeft";
import BendRightIcon from "./components/icons/BendRight";
import BoltIcon from "./components/icons/Bolt";
import BookIcon from "./components/icons/Book";
import BookmarkIcon from "./components/icons/Bookmark";
import BriefcaseIcon from "./components/icons/Briefcase";
import CalendarIcon from "./components/icons/Calendar";
import CameraIcon from "./components/icons/Camera";
import CardIcon from "./components/icons/Card";
import CartIcon from "./components/icons/Cart";
import CashIcon from "./components/icons/Cash";
import CenterAlignIcon from "./components/icons/CenterAlign";
import CertificateIcon from "./components/icons/Certificate";
import Certificate2Icon from "./components/icons/Certificate2";
import ChartIcon from "./components/icons/Chart";
import CheckIcon from "./components/icons/Check";
import CheckCircleIcon from "./components/icons/CheckCircle";
import ChevronArrowDownIcon from "./components/icons/ChevronArrowDown";
import ChevronArrowLeftIcon from "./components/icons/ChevronArrowLeft";
import ChevronArrowRightIcon from "./components/icons/ChevronArrowRight";
import ChevronArrowUpIcon from "./components/icons/ChevronArrowUp";
import ChevronFilledDownIcon from "./components/icons/ChevronFilledDown";
import ChevronFilledLeftIcon from "./components/icons/ChevronFilledLeft";
import ChevronFilledRightIcon from "./components/icons/ChevronFilledRight";
import ChevronFilledUpIcon from "./components/icons/ChevronFilledUp";
import CircleIcon from "./components/icons/Circle";
import CloseIcon from "./components/icons/Close";
import CloseCircleIcon from "./components/icons/CloseCircle";
import CloudIcon from "./components/icons/Cloud";
import CloudDownloadIcon from "./components/icons/CloudDownload";
import CloudFlashIcon from "./components/icons/CloudFlash";
import CloudRainIcon from "./components/icons/CloudRain";
import CloudUploadIcon from "./components/icons/CloudUpload";
import CommandIcon from "./components/icons/Command";
import CompanyIcon from "./components/icons/Company";
import CompassIcon from "./components/icons/Compass";
import CompressIcon from "./components/icons/Compress";
import Compress2Icon from "./components/icons/Compress2";
import CopyIcon from "./components/icons/Copy";
import CropIcon from "./components/icons/Crop";
import CrownIcon from "./components/icons/Crown";
import CutIcon from "./components/icons/Cut";
import DecreaseIcon from "./components/icons/Decrease";
import Decrease2Icon from "./components/icons/Decrease2";
import DeleteIcon from "./components/icons/Delete";
import DepositsIcon from "./components/icons/Deposits";
import DetailsIcon from "./components/icons/Details";
import DialIcon from "./components/icons/Dial";
import DialOffIcon from "./components/icons/DialOff";
import DisabledIcon from "./components/icons/Disabled";
import DislikeIcon from "./components/icons/Dislike";
import DocumentIcon from "./components/icons/Document";
import DoubleCheckIcon from "./components/icons/DoubleCheck";
import DownloadIcon from "./components/icons/Download";
import DropIcon from "./components/icons/Drop";
import EditIcon from "./components/icons/Edit";
import Edit2Icon from "./components/icons/Edit2";
import ErrorIcon from "./components/icons/Error";
import ErrorCircleIcon from "./components/icons/ErrorCircle";
import ExitFullScreenIcon from "./components/icons/ExitFullScreen";
import ExpandIcon from "./components/icons/Expand";
import Expand2Icon from "./components/icons/Expand2";
import ExternalLinkIcon from "./components/icons/ExternalLink";
import EyeIcon from "./components/icons/Eye";
import EyeOffIcon from "./components/icons/EyeOff";
import FileIcon from "./components/icons/File";
import FilterIcon from "./components/icons/Filter";
import FlagIcon from "./components/icons/Flag";
import FlameIcon from "./components/icons/Flame";
import FlashIcon from "./components/icons/Flash";
import FolderIcon from "./components/icons/Folder";
import ForwardIcon from "./components/icons/Forward";
import FunnelIcon from "./components/icons/Funnel";
import FullScreenIcon from "./components/icons/FullScreen";
import GemIcon from "./components/icons/Gem";
import GiftIcon from "./components/icons/Gift";
import GitlabIcon from "./components/icons/Gitlab";
import GlobeIcon from "./components/icons/Globe";
import GridIcon from "./components/icons/Grid";
import HeartIcon from "./components/icons/Heart";
import HeartFilledIcon from "./components/icons/HeartFilled";
import HomeIcon from "./components/icons/Home";
import ImageIcon from "./components/icons/Image";
import InboxIcon from "./components/icons/Inbox";
import IncreaseIcon from "./components/icons/Increase";
import Increase2Icon from "./components/icons/Increase2";
import InfoIcon from "./components/icons/Info";
import InfoOutlineIcon from "./components/icons/InfoOutline";
import JustifyAlignIcon from "./components/icons/JustifyAlign";
import KeyIcon from "./components/icons/Key";
import LeftAlignIcon from "./components/icons/LeftAlign";
import LikeIcon from "./components/icons/Like";
import LinkIcon from "./components/icons/Link";
import ListIcon from "./components/icons/List";
import List2Icon from "./components/icons/List2";
import LocationIcon from "./components/icons/Location";
import Location2Icon from "./components/icons/Location2";
import Location3Icon from "./components/icons/Location3";
import LockIcon from "./components/icons/Lock";
import LoginIcon from "./components/icons/Login";
import Login2Icon from "./components/icons/Login2";
import LogoutIcon from "./components/icons/Logout";
import Logout2Icon from "./components/icons/Logout2";
import MapIcon from "./components/icons/Map";
import MenuIcon from "./components/icons/Menu";
import Menu2Icon from "./components/icons/Menu2";
import Menu3Icon from "./components/icons/Menu3";
import Menu4Icon from "./components/icons/Menu4";
import Menu5Icon from "./components/icons/Menu5";
import Menu6Icon from "./components/icons/Menu6";
import Menu7Icon from "./components/icons/Menu7";
import Menu8Icon from "./components/icons/Menu8";
import MenuHIcon from "./components/icons/MenuH";
import MenuVIcon from "./components/icons/MenuV";
import MessageIcon from "./components/icons/Message";
import MicIcon from "./components/icons/Mic";
import MicOffIcon from "./components/icons/MicOff";
import MoonIcon from "./components/icons/Moon";
import MoveIcon from "./components/icons/Move";
import MusicIcon from "./components/icons/Music";
import MuteIcon from "./components/icons/Mute";
import NetworkIcon from "./components/icons/Network";
import NextIcon from "./components/icons/Next";
import NotificationBellIcon from "./components/icons/NotificationBell";
import PauseIcon from "./components/icons/Pause";
import PieIcon from "./components/icons/Pie";
import PinIcon from "./components/icons/Pin";
import PlayCircleIcon from "./components/icons/PlayCircle";
import PowerIcon from "./components/icons/Power";
import PreviousIcon from "./components/icons/Previous";
import PrintIcon from "./components/icons/Print";
import ProfileIcon from "./components/icons/Profile";
import PulseIcon from "./components/icons/Pulse";
import RefreshIcon from "./components/icons/Refresh";
import ReloadIcon from "./components/icons/Reload";
import RightAlignIcon from "./components/icons/RightAlign";
import RocketIcon from "./components/icons/Rocket";
import RotateLeftIcon from "./components/icons/RotateLeft";
import RotateRightIcon from "./components/icons/RotateRight";
import ScanCardIcon from "./components/icons/ScanCard";
import ScrollIcon from "./components/icons/Scroll";
import SearchIcon from "./components/icons/Search";
import SelectItemIcon from "./components/icons/SelectItem";
import SendIcon from "./components/icons/Send";
import SettingsIcon from "./components/icons/Settings";
import ShareIcon from "./components/icons/Share";
import ShieldIcon from "./components/icons/Shield";
import ShieldCheckIcon from "./components/icons/ShieldCheck";
import ShieldFlashIcon from "./components/icons/ShieldFlash";
import ShopIcon from "./components/icons/Shop";
import SortIcon from "./components/icons/Sort";
import Sort2Icon from "./components/icons/Sort2";
import SortAscendingIcon from "./components/icons/SortAscending";
import SortDescendingIcon from "./components/icons/SortDescending";
import SoundIcon from "./components/icons/Sound";
import StackIcon from "./components/icons/Stack";
import StaffIcon from "./components/icons/Staff";
import StarIcon from "./components/icons/Star";
import StopCircleIcon from "./components/icons/StopCircle";
import StopwatchIcon from "./components/icons/Stopwatch";
import SunIcon from "./components/icons/Sun";
import SupportIcon from "./components/icons/Support";
import TableIcon from "./components/icons/Table";
import TagIcon from "./components/icons/Tag";
import TextIconIcon from "./components/icons/Text";
import TimeIcon from "./components/icons/Time";
import TransferIcon from "./components/icons/Transfer";
import TrophyIcon from "./components/icons/Trophy";
import UnlockIcon from "./components/icons/Unlock";
import UploadIcon from "./components/icons/Upload";
import VerticalArrowsIcon from "./components/icons/VerticalArrows";
import VideoIcon from "./components/icons/Video";
import VideoOffIcon from "./components/icons/VideoOff";
import VoucherIcon from "./components/icons/Voucher";
import WalletIcon from "./components/icons/Wallet";
import WarningIcon from "./components/icons/Warning";
import WaveIcon from "./components/icons/Wave";
import WithdrawIcon from "./components/icons/Withdraw";

/// IMPORT FILLED ICONS
import CloudUploadFilledIcon from "./components/icons/filled/CloudUploadFilledIcon";

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
  Toast,
  ToastContext,
  ToastProvider,
  getTextColor,
  hexToRgbA,
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
