import React from "react";
import Icon from "../src/Icon";
import SearchIcon from "../../icons/Search";
import ChevronFilledDownIcon from "../../icons/ChevronFilledDown";
import InfoIcon from "../../icons/Info";
import WarningIcon from "../../icons/Warning";
import ErrorIcon from "../../icons/Error";
import CheckIcon from "../../icons/Check";
import CloseIcon from "../../icons/Close";
import ScanCardIcon from "../../icons/ScanCard";
import CardIcon from "../../icons/Card";
import ArrowLeftIcon from "../../icons/ArrowLeft";
import ArrowRightIcon from "../../icons/ArrowRight";
import CalendarIcon from "../../icons/Calendar";
import CartIcon from "../../icons/Cart";
import TagIcon from "../../icons/Tag";
import WalletIcon from "../../icons/Wallet";
import CashIcon from "../../icons/Cash";
import GiftIcon from "../../icons/Gift";
import VoucherIcon from "../../icons/Voucher";
import LocationIcon from "../../icons/Location";
import ProfileIcon from "../../icons/Profile";
import AddUserIcon from "../../icons/AddUser";
import ShopIcon from "../../icons/Shop";
import BankIcon from "../../icons/Bank";
import FileIcon from "../../icons/File";
import DocumentIcon from "../../icons/Document";
import AddFileIcon from "../../icons/AddFile";
import EditIcon from "../../icons/Edit";
import Edit2Icon from "../../icons/Edit2";
import CopyIcon from "../../icons/Copy";
import AddItemIcon from "../../icons/AddItem";
import SelectItemIcon from "../../icons/SelectItem";
import FunnelIcon from "../../icons/Funnel";
import CropIcon from "../../icons/Crop";
import CommandIcon from "../../icons/Command";
import StackIcon from "../../icons/Stack";
import PowerIcon from "../../icons/Power";
import LockIcon from "../../icons/Lock";
import UnlockIcon from "../../icons/Unlock";
import AttachmentIcon from "../../icons/Attachment";
import InfoOutlineIcon from "../../icons/InfoOutline";
import PlayCircleIcon from "../../icons/PlayCircle";
import StopCircleIcon from "../../icons/StopCircle";
import PieIcon from "../../icons/Pie";
import AddCircleIcon from "../../icons/AddCircle";
import CloseCircleIcon from "../../icons/CloseCircle";
import ErrorCircleIcon from "../../icons/ErrorCircle";
import CheckCircleIcon from "../../icons/CheckCircle";
import ExpandIcon from "../../icons/Expand";
import CompressIcon from "../../icons/Compress";
import Compress2Icon from "../../icons/Compress2";
import Expand2Icon from "../../icons/Expand2";
import FullScreenIcon from "../../icons/FullScreen";
import ExitFullScreenIcon from "../../icons/ExitFullScreen";
import IncreaseIcon from "../../icons/Increase";
import DecreaseIcon from "../../icons/Decrease";
import AddIcon from "../../icons/Add";
import GridIcon from "../../icons/Grid";
import ListIcon from "../../icons/List";
import AppsIcon from "../../icons/Apps";
import MenuVIcon from "../../icons/MenuV";
import MenuHIcon from "../../icons/MenuH";
import ScrollIcon from "../../icons/Scroll";
import DetailsIcon from "../../icons/Details";
import PrintIcon from "../../icons/Print";
import AlarmIcon from "../../icons/Alarm";
import StopwatchIcon from "../../icons/Stopwatch";
import TimeIcon from "../../icons/Time";
import SoundIcon from "../../icons/Sound";
import MuteIcon from "../../icons/Mute";
import MicOffIcon from "../../icons/MicOff";
import EyeIcon from "../../icons/Eye";
import EyeOffIcon from "../../icons/EyeOff";
import VideoIcon from "../../icons/Video";
import VideoOffIcon from "../../icons/VideoOff";
import DialIcon from "../../icons/Dial";
import DialOffIcon from "../../icons/DialOff";
import MicIcon from "../../icons/Mic";
import ShareIcon from "../../icons/Share";
import CloudUploadIcon from "../../icons/CloudUpload";
import CloudDownloadIcon from "../../icons/CloudDownload";
import SunIcon from "../../icons/Sun";
import MoonIcon from "../../icons/Moon";
import CloudRainIcon from "../../icons/CloudRain";
import CloudIcon from "../../icons/Cloud";
import CloudFlashIcon from "../../icons/CloudFlash";
import NotificationBellIcon from "../../icons/NotificationBell";
import InboxIcon from "../../icons/Inbox";
import HomeIcon from "../../icons/Home";
import ImageIcon from "../../icons/Image";

export default {
  title: "Icons",
  component: Icon,
  argTypes: {
    fill: {
      control: "color",
    },
    smartColor: {
      control: "color",
    },
    stroke: {
      control: "color",
    },
  },
};

const Template = ({ children, ...args }) => <Icon {...args} />;

export const Search = Template.bind({});
Search.args = {
  icon: SearchIcon,
};

export const ChevronFilledDown = Template.bind({});
ChevronFilledDown.args = {
  icon: ChevronFilledDownIcon,
};

export const Info = Template.bind({});
Info.args = {
  icon: InfoIcon,
};

export const Warning = Template.bind({});
Warning.args = {
  icon: WarningIcon,
};

export const Error = Template.bind({});
Error.args = {
  icon: ErrorIcon,
};

export const Check = Template.bind({});
Check.args = {
  icon: CheckIcon,
};

export const Close = Template.bind({});
Close.args = {
  icon: CloseIcon,
};

export const ScanCard = Template.bind({});
ScanCard.args = {
  icon: ScanCardIcon,
};

export const Card = Template.bind({});
Card.args = {
  icon: CardIcon,
};

export const ArrowLeft = Template.bind({});
ArrowLeft.args = {
  icon: ArrowLeftIcon,
};

export const ArrowRight = Template.bind({});
ArrowRight.args = {
  icon: ArrowRightIcon,
};

export const Calendar = Template.bind({});
Calendar.args = {
  icon: CalendarIcon,
};

export const Cart = Template.bind({});
Cart.args = {
  icon: CartIcon,
};

export const Tag = Template.bind({});
Tag.args = {
  icon: TagIcon,
};

export const Wallet = Template.bind({});
Wallet.args = {
  icon: WalletIcon,
};

export const Cash = Template.bind({});
Cash.args = {
  icon: CashIcon,
};

export const Gift = Template.bind({});
Gift.args = {
  icon: GiftIcon,
};

export const Voucher = Template.bind({});
Voucher.args = {
  icon: VoucherIcon,
};

export const Location = Template.bind({});
Location.args = {
  icon: LocationIcon,
};

export const Profile = Template.bind({});
Profile.args = {
  icon: ProfileIcon,
};

export const AddUser = Template.bind({});
AddUser.args = {
  icon: AddUserIcon,
};

export const Shop = Template.bind({});
Shop.args = {
  icon: ShopIcon,
};

export const Bank = Template.bind({});
Bank.args = {
  icon: BankIcon,
};

export const File = Template.bind({});
File.args = {
  icon: FileIcon,
};

export const Document = Template.bind({});
Document.args = {
  icon: DocumentIcon,
};

export const AddFile = Template.bind({});
AddFile.args = {
  icon: AddFileIcon,
};

export const Edit = Template.bind({});
Edit.args = {
  icon: EditIcon,
};

export const Edit2 = Template.bind({});
Edit2.args = {
  icon: Edit2Icon,
};

export const Copy = Template.bind({});
Copy.args = {
  icon: CopyIcon,
};

export const AddItem = Template.bind({});
AddItem.args = {
  icon: AddItemIcon,
};

export const SelectItem = Template.bind({});
SelectItem.args = {
  icon: SelectItemIcon,
};

export const Funnel = Template.bind({});
Funnel.args = {
  icon: FunnelIcon,
};

export const Crop = Template.bind({});
Crop.args = {
  icon: CropIcon,
};

export const Command = Template.bind({});
Command.args = {
  icon: CommandIcon,
};

export const Stack = Template.bind({});
Stack.args = {
  icon: StackIcon,
};

export const Power = Template.bind({});
Power.args = {
  icon: PowerIcon,
};

export const Lock = Template.bind({});
Lock.args = {
  icon: LockIcon,
};

export const Unlock = Template.bind({});
Unlock.args = {
  icon: UnlockIcon,
};

export const Attachment = Template.bind({});
Attachment.args = {
  icon: AttachmentIcon,
};

export const InfoOutline = Template.bind({});
InfoOutline.args = {
  icon: InfoOutlineIcon,
};

export const PlayCircle = Template.bind({});
PlayCircle.args = {
  icon: PlayCircleIcon,
};

export const StopCircle = Template.bind({});
StopCircle.args = {
  icon: StopCircleIcon,
};

export const Pie = Template.bind({});
Pie.args = {
  icon: PieIcon,
};

export const AddCircle = Template.bind({});
AddCircle.args = {
  icon: AddCircleIcon,
};

export const CloseCircle = Template.bind({});
CloseCircle.args = {
  icon: CloseCircleIcon,
};

export const ErrorCircle = Template.bind({});
ErrorCircle.args = {
  icon: ErrorCircleIcon,
};

export const CheckCircle = Template.bind({});
CheckCircle.args = {
  icon: CheckCircleIcon,
};

export const Expand = Template.bind({});
Expand.args = {
  icon: ExpandIcon,
};

export const Compress = Template.bind({});
Compress.args = {
  icon: CompressIcon,
};

export const Compress2 = Template.bind({});
Compress2.args = {
  icon: Compress2Icon,
};

export const Expand2 = Template.bind({});
Expand2.args = {
  icon: Expand2Icon,
};

export const FullScreen = Template.bind({});
FullScreen.args = {
  icon: FullScreenIcon,
};

export const ExitFullScreen = Template.bind({});
ExitFullScreen.args = {
  icon: ExitFullScreenIcon,
};

export const Increase = Template.bind({});
Increase.args = {
  icon: IncreaseIcon,
};

export const Decrease = Template.bind({});
Decrease.args = {
  icon: DecreaseIcon,
};

export const Add = Template.bind({});
Add.args = {
  icon: AddIcon,
};

export const Grid = Template.bind({});
Grid.args = {
  icon: GridIcon,
};

export const List = Template.bind({});
List.args = {
  icon: ListIcon,
};

export const Apps = Template.bind({});
Apps.args = {
  icon: AppsIcon,
};

export const MenuV = Template.bind({});
MenuV.args = {
  icon: MenuVIcon,
};

export const MenuH = Template.bind({});
MenuH.args = {
  icon: MenuHIcon,
};

export const Scroll = Template.bind({});
Scroll.args = {
  icon: ScrollIcon,
};

export const Details = Template.bind({});
Details.args = {
  icon: DetailsIcon,
};

export const Print = Template.bind({});
Print.args = {
  icon: PrintIcon,
};

export const Alarm = Template.bind({});
Alarm.args = {
  icon: AlarmIcon,
};

export const Stopwatch = Template.bind({});
Stopwatch.args = {
  icon: StopwatchIcon,
};

export const Time = Template.bind({});
Time.args = {
  icon: TimeIcon,
};

export const Sound = Template.bind({});
Sound.args = {
  icon: SoundIcon,
};

export const Mute = Template.bind({});
Mute.args = {
  icon: MuteIcon,
};

export const MicOff = Template.bind({});
MicOff.args = {
  icon: MicOffIcon,
};

export const Eye = Template.bind({});
Eye.args = {
  icon: EyeIcon,
};

export const EyeOff = Template.bind({});
EyeOff.args = {
  icon: EyeOffIcon,
};

export const Video = Template.bind({});
Video.args = {
  icon: VideoIcon,
};

export const VideoOff = Template.bind({});
VideoOff.args = {
  icon: VideoOffIcon,
};

export const Dial = Template.bind({});
Dial.args = {
  icon: DialIcon,
};

export const DialOff = Template.bind({});
DialOff.args = {
  icon: DialOffIcon,
};

export const Mic = Template.bind({});
Mic.args = {
  icon: MicIcon,
};

export const Share = Template.bind({});
Share.args = {
  icon: ShareIcon,
};

export const CloudUpload = Template.bind({});
CloudUpload.args = {
  icon: CloudUploadIcon,
};

export const CloudDownload = Template.bind({});
CloudDownload.args = {
  icon: CloudDownloadIcon,
};

export const Sun = Template.bind({});
Sun.args = {
  icon: SunIcon,
};

export const Moon = Template.bind({});
Moon.args = {
  icon: MoonIcon,
};

export const CloudRain = Template.bind({});
CloudRain.args = {
  icon: CloudRainIcon,
};

export const Cloud = Template.bind({});
Cloud.args = {
  icon: CloudIcon,
};

export const CloudFlash = Template.bind({});
CloudFlash.args = {
  icon: CloudFlashIcon,
};

export const NotificationBell = Template.bind({});
NotificationBell.args = {
  icon: NotificationBellIcon,
};

export const Inbox = Template.bind({});
Inbox.args = {
  icon: InboxIcon,
};

export const Home = Template.bind({});
Home.args = {
  icon: HomeIcon,
};

export const Image = Template.bind({});
Image.args = {
  icon: ImageIcon,
};
