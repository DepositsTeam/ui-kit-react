"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Heart = exports.Grid = exports.Globe = exports.Gift = exports.Gem = exports.Funnel = exports.FullScreen = exports.Forward = exports.Folder = exports.Flash = exports.Flame = exports.Flag = exports.Filter = exports.File = exports.EyeOff = exports.Eye = exports.ExternalLink = exports.Expand2 = exports.Expand = exports.ExitFullScreen = exports.ErrorCircle = exports.Error = exports.Edit2 = exports.Edit = exports.Drop = exports.Download = exports.DoubleCheck = exports.Document = exports.Disabled = exports.DialOff = exports.Dial = exports.Details = exports.Deposits = exports.Delete = exports.Decrease2 = exports.Decrease = exports.Cut = exports.Crown = exports.Crop = exports.Copy = exports.Compress2 = exports.Compress = exports.Compass = exports.Company = exports.Command = exports.CloudUpload = exports.CloudRain = exports.CloudFlash = exports.CloudDownload = exports.Cloud = exports.CloseCircle = exports.Close = exports.Circle = exports.ChevronFilledUp = exports.ChevronFilledRight = exports.ChevronFilledLeft = exports.ChevronFilledDown = exports.ChevronArrowUp = exports.ChevronArrowRight = exports.ChevronArrowLeft = exports.ChevronArrowDown = exports.CheckCircle = exports.Check = exports.Chat = exports.Chart = exports.Certificate2 = exports.Certificate = exports.CenterAlign = exports.Cash = exports.Cart = exports.Card = exports.Camera = exports.Calendar = exports.Briefcase = exports.Bookmark = exports.Book = exports.Bolt = exports.BendRight = exports.BendLeft = exports.Basket = exports.BarChart = exports.Bank = exports.Avatar = exports.Attachment = exports.ArrowUpRight = exports.ArrowUpLeft = exports.ArrowUp = exports.ArrowRight = exports.ArrowLeft = exports.ArrowDownRight = exports.ArrowDown = exports.Apps = exports.Announce = exports.Alarm = exports.AddUser = exports.AddItem = exports.AddFile = exports.AddCircle = exports.AddBookmark = exports.Add = void 0;
exports.default = exports.Withdraw = exports.Wave = exports.Warning = exports.Wallet = exports.Voucher = exports.VideoOff = exports.Video = exports.VerticalArrows = exports.Upload = exports.Unlock = exports.Trophy = exports.Transfer = exports.Time = exports.Text = exports.Tag = exports.Table = exports.Support = exports.Sun = exports.Stopwatch = exports.StopCircle = exports.Star = exports.Staff = exports.Stack = exports.Sound = exports.SortDescending = exports.SortAscending = exports.Sort2 = exports.Sort = exports.Shop = exports.ShieldFlash = exports.ShieldCheck = exports.Shield = exports.Share = exports.Settings = exports.Send = exports.SelectItem = exports.Search = exports.Scroll = exports.ScanCard = exports.RotateRight = exports.RotateLeft = exports.Rocket = exports.RightAlign = exports.Reload = exports.Refresh = exports.Pulse = exports.Profile = exports.Print = exports.Previous = exports.Power = exports.PlayCircle = exports.Play = exports.Pin = exports.Pie = exports.Pause = exports.NotificationBell = exports.Next = exports.Network = exports.Mute = exports.Music = exports.Move = exports.Moon = exports.MicOff = exports.Mic = exports.MenuV = exports.MenuH = exports.Menu8 = exports.Menu7 = exports.Menu6 = exports.Menu5 = exports.Menu4 = exports.Menu3 = exports.Menu2 = exports.Menu = exports.Logout2 = exports.Logout = exports.Login2 = exports.Login = exports.Lock = exports.Location = exports.List2 = exports.List = exports.Link = exports.LeftAlign = exports.Key = exports.JustifyAlign = exports.InfoOutline = exports.Info = exports.Increase2 = exports.Increase = exports.Inbox = exports.Image = exports.Home = exports.HeartFilled = void 0;

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var _Search = _interopRequireDefault(require("../../icons/Search"));

var _ChevronFilledDown = _interopRequireDefault(require("../../icons/ChevronFilledDown"));

var _Info = _interopRequireDefault(require("../../icons/Info"));

var _Warning = _interopRequireDefault(require("../../icons/Warning"));

var _Error = _interopRequireDefault(require("../../icons/Error"));

var _Check = _interopRequireDefault(require("../../icons/Check"));

var _Close = _interopRequireDefault(require("../../icons/Close"));

var _ScanCard = _interopRequireDefault(require("../../icons/ScanCard"));

var _Card = _interopRequireDefault(require("../../icons/Card"));

var _ChevronArrowLeft = _interopRequireDefault(require("../../icons/ChevronArrowLeft"));

var _ChevronArrowRight = _interopRequireDefault(require("../../icons/ChevronArrowRight"));

var _Calendar = _interopRequireDefault(require("../../icons/Calendar"));

var _Cart = _interopRequireDefault(require("../../icons/Cart"));

var _Tag = _interopRequireDefault(require("../../icons/Tag"));

var _Wallet = _interopRequireDefault(require("../../icons/Wallet"));

var _Cash = _interopRequireDefault(require("../../icons/Cash"));

var _Gift = _interopRequireDefault(require("../../icons/Gift"));

var _Voucher = _interopRequireDefault(require("../../icons/Voucher"));

var _Location = _interopRequireDefault(require("../../icons/Location"));

var _Profile = _interopRequireDefault(require("../../icons/Profile"));

var _AddUser = _interopRequireDefault(require("../../icons/AddUser"));

var _Shop = _interopRequireDefault(require("../../icons/Shop"));

var _Bank = _interopRequireDefault(require("../../icons/Bank"));

var _File = _interopRequireDefault(require("../../icons/File"));

var _Document = _interopRequireDefault(require("../../icons/Document"));

var _AddFile = _interopRequireDefault(require("../../icons/AddFile"));

var _Edit = _interopRequireDefault(require("../../icons/Edit"));

var _Edit2 = _interopRequireDefault(require("../../icons/Edit2"));

var _Copy = _interopRequireDefault(require("../../icons/Copy"));

var _AddItem = _interopRequireDefault(require("../../icons/AddItem"));

var _SelectItem = _interopRequireDefault(require("../../icons/SelectItem"));

var _Funnel = _interopRequireDefault(require("../../icons/Funnel"));

var _Crop = _interopRequireDefault(require("../../icons/Crop"));

var _Command = _interopRequireDefault(require("../../icons/Command"));

var _Stack = _interopRequireDefault(require("../../icons/Stack"));

var _Power = _interopRequireDefault(require("../../icons/Power"));

var _Lock = _interopRequireDefault(require("../../icons/Lock"));

var _Unlock = _interopRequireDefault(require("../../icons/Unlock"));

var _Attachment = _interopRequireDefault(require("../../icons/Attachment"));

var _InfoOutline = _interopRequireDefault(require("../../icons/InfoOutline"));

var _PlayCircle = _interopRequireDefault(require("../../icons/PlayCircle"));

var _StopCircle = _interopRequireDefault(require("../../icons/StopCircle"));

var _Pie = _interopRequireDefault(require("../../icons/Pie"));

var _AddCircle = _interopRequireDefault(require("../../icons/AddCircle"));

var _CloseCircle = _interopRequireDefault(require("../../icons/CloseCircle"));

var _ErrorCircle = _interopRequireDefault(require("../../icons/ErrorCircle"));

var _CheckCircle = _interopRequireDefault(require("../../icons/CheckCircle"));

var _Expand = _interopRequireDefault(require("../../icons/Expand"));

var _Compress = _interopRequireDefault(require("../../icons/Compress"));

var _Compress2 = _interopRequireDefault(require("../../icons/Compress2"));

var _Expand2 = _interopRequireDefault(require("../../icons/Expand2"));

var _FullScreen = _interopRequireDefault(require("../../icons/FullScreen"));

var _ExitFullScreen = _interopRequireDefault(require("../../icons/ExitFullScreen"));

var _Increase = _interopRequireDefault(require("../../icons/Increase"));

var _Decrease = _interopRequireDefault(require("../../icons/Decrease"));

var _Add = _interopRequireDefault(require("../../icons/Add"));

var _Grid = _interopRequireDefault(require("../../icons/Grid"));

var _List = _interopRequireDefault(require("../../icons/List"));

var _Apps = _interopRequireDefault(require("../../icons/Apps"));

var _MenuV = _interopRequireDefault(require("../../icons/MenuV"));

var _MenuH = _interopRequireDefault(require("../../icons/MenuH"));

var _Scroll = _interopRequireDefault(require("../../icons/Scroll"));

var _Details = _interopRequireDefault(require("../../icons/Details"));

var _Print = _interopRequireDefault(require("../../icons/Print"));

var _Alarm = _interopRequireDefault(require("../../icons/Alarm"));

var _Stopwatch = _interopRequireDefault(require("../../icons/Stopwatch"));

var _Time = _interopRequireDefault(require("../../icons/Time"));

var _Sound = _interopRequireDefault(require("../../icons/Sound"));

var _Mute = _interopRequireDefault(require("../../icons/Mute"));

var _MicOff = _interopRequireDefault(require("../../icons/MicOff"));

var _Eye = _interopRequireDefault(require("../../icons/Eye"));

var _EyeOff = _interopRequireDefault(require("../../icons/EyeOff"));

var _Video = _interopRequireDefault(require("../../icons/Video"));

var _VideoOff = _interopRequireDefault(require("../../icons/VideoOff"));

var _Dial = _interopRequireDefault(require("../../icons/Dial"));

var _DialOff = _interopRequireDefault(require("../../icons/DialOff"));

var _Mic = _interopRequireDefault(require("../../icons/Mic"));

var _Share = _interopRequireDefault(require("../../icons/Share"));

var _CloudUpload = _interopRequireDefault(require("../../icons/CloudUpload"));

var _CloudDownload = _interopRequireDefault(require("../../icons/CloudDownload"));

var _Sun = _interopRequireDefault(require("../../icons/Sun"));

var _Moon = _interopRequireDefault(require("../../icons/Moon"));

var _CloudRain = _interopRequireDefault(require("../../icons/CloudRain"));

var _Cloud = _interopRequireDefault(require("../../icons/Cloud"));

var _CloudFlash = _interopRequireDefault(require("../../icons/CloudFlash"));

var _NotificationBell = _interopRequireDefault(require("../../icons/NotificationBell"));

var _Inbox = _interopRequireDefault(require("../../icons/Inbox"));

var _Home = _interopRequireDefault(require("../../icons/Home"));

var _Image = _interopRequireDefault(require("../../icons/Image"));

var _Basket = _interopRequireDefault(require("../../icons/Basket"));

var _Folder = _interopRequireDefault(require("../../icons/Folder"));

var _Chat = _interopRequireDefault(require("../../icons/Chat"));

var _Star = _interopRequireDefault(require("../../icons/Star"));

var _Link = _interopRequireDefault(require("../../icons/Link"));

var _Pulse = _interopRequireDefault(require("../../icons/Pulse"));

var _Music = _interopRequireDefault(require("../../icons/Music"));

var _BarChart = _interopRequireDefault(require("../../icons/BarChart"));

var _Table = _interopRequireDefault(require("../../icons/Table"));

var _Wave = _interopRequireDefault(require("../../icons/Wave"));

var _Book = _interopRequireDefault(require("../../icons/Book"));

var _Login = _interopRequireDefault(require("../../icons/Login"));

var _Logout = _interopRequireDefault(require("../../icons/Logout"));

var _Logout2 = _interopRequireDefault(require("../../icons/Logout2"));

var _Login2 = _interopRequireDefault(require("../../icons/Login2"));

var _Download = _interopRequireDefault(require("../../icons/Download"));

var _Camera = _interopRequireDefault(require("../../icons/Camera"));

var _Bookmark = _interopRequireDefault(require("../../icons/Bookmark"));

var _AddBookmark = _interopRequireDefault(require("../../icons/AddBookmark"));

var _Heart = _interopRequireDefault(require("../../icons/Heart"));

var _HeartFilled = _interopRequireDefault(require("../../icons/HeartFilled"));

var _Menu = _interopRequireDefault(require("../../icons/Menu"));

var _Menu2 = _interopRequireDefault(require("../../icons/Menu2"));

var _Menu3 = _interopRequireDefault(require("../../icons/Menu3"));

var _Menu4 = _interopRequireDefault(require("../../icons/Menu4"));

var _Menu5 = _interopRequireDefault(require("../../icons/Menu5"));

var _Menu6 = _interopRequireDefault(require("../../icons/Menu6"));

var _Menu7 = _interopRequireDefault(require("../../icons/Menu7"));

var _Menu8 = _interopRequireDefault(require("../../icons/Menu8"));

var _Settings = _interopRequireDefault(require("../../icons/Settings"));

var _Upload = _interopRequireDefault(require("../../icons/Upload"));

var _JustifyAlign = _interopRequireDefault(require("../../icons/JustifyAlign"));

var _LeftAlign = _interopRequireDefault(require("../../icons/LeftAlign"));

var _CenterAlign = _interopRequireDefault(require("../../icons/CenterAlign"));

var _RightAlign = _interopRequireDefault(require("../../icons/RightAlign"));

var _Network = _interopRequireDefault(require("../../icons/Network"));

var _List2 = _interopRequireDefault(require("../../icons/List2"));

var _Filter = _interopRequireDefault(require("../../icons/Filter"));

var _Previous = _interopRequireDefault(require("../../icons/Previous"));

var _Next = _interopRequireDefault(require("../../icons/Next"));

var _Sort = _interopRequireDefault(require("../../icons/Sort"));

var _Increase2 = _interopRequireDefault(require("../../icons/Increase2"));

var _Pause = _interopRequireDefault(require("../../icons/Pause"));

var _VerticalArrows = _interopRequireDefault(require("../../icons/VerticalArrows"));

var _Play = _interopRequireDefault(require("../../icons/Play"));

var _Forward = _interopRequireDefault(require("../../icons/Forward"));

var _Move = _interopRequireDefault(require("../../icons/Move"));

var _ChevronArrowDown = _interopRequireDefault(require("../../icons/ChevronArrowDown"));

var _RotateLeft = _interopRequireDefault(require("../../icons/RotateLeft"));

var _RotateRight = _interopRequireDefault(require("../../icons/RotateRight"));

var _Decrease2 = _interopRequireDefault(require("../../icons/Decrease2"));

var _ArrowUp = _interopRequireDefault(require("../../icons/ArrowUp"));

var _Transfer = _interopRequireDefault(require("../../icons/Transfer"));

var _Pin = _interopRequireDefault(require("../../icons/Pin"));

var _BendLeft = _interopRequireDefault(require("../../icons/BendLeft"));

var _BendRight = _interopRequireDefault(require("../../icons/BendRight"));

var _SortAscending = _interopRequireDefault(require("../../icons/SortAscending"));

var _SortDescending = _interopRequireDefault(require("../../icons/SortDescending"));

var _Refresh = _interopRequireDefault(require("../../icons/Refresh"));

var _ArrowLeft = _interopRequireDefault(require("../../icons/ArrowLeft"));

var _ArrowRight = _interopRequireDefault(require("../../icons/ArrowRight"));

var _ArrowDown = _interopRequireDefault(require("../../icons/ArrowDown"));

var _Avatar = _interopRequireDefault(require("../../icons/Avatar"));

var _Flash = _interopRequireDefault(require("../../icons/Flash"));

var _Sort2 = _interopRequireDefault(require("../../icons/Sort2"));

var _Reload = _interopRequireDefault(require("../../icons/Reload"));

var _Withdraw = _interopRequireDefault(require("../../icons/Withdraw"));

var _Compass = _interopRequireDefault(require("../../icons/Compass"));

var _Globe = _interopRequireDefault(require("../../icons/Globe"));

var _ExternalLink = _interopRequireDefault(require("../../icons/ExternalLink"));

var _ChevronFilledUp = _interopRequireDefault(require("../../icons/ChevronFilledUp"));

var _Drop = _interopRequireDefault(require("../../icons/Drop"));

var _Deposits = _interopRequireDefault(require("../../icons/Deposits"));

var _Shield = _interopRequireDefault(require("../../icons/Shield"));

var _Gem = _interopRequireDefault(require("../../icons/Gem"));

var _ShieldCheck = _interopRequireDefault(require("../../icons/ShieldCheck"));

var _Flag = _interopRequireDefault(require("../../icons/Flag"));

var _ArrowUpRight = _interopRequireDefault(require("../../icons/ArrowUpRight"));

var _Bolt = _interopRequireDefault(require("../../icons/Bolt"));

var _Announce = _interopRequireDefault(require("../../icons/Announce"));

var _Delete = _interopRequireDefault(require("../../icons/Delete"));

var _Disabled = _interopRequireDefault(require("../../icons/Disabled"));

var _Certificate = _interopRequireDefault(require("../../icons/Certificate"));

var _Key = _interopRequireDefault(require("../../icons/Key"));

var _Crown = _interopRequireDefault(require("../../icons/Crown"));

var _ArrowUpLeft = _interopRequireDefault(require("../../icons/ArrowUpLeft"));

var _Support = _interopRequireDefault(require("../../icons/Support"));

var _Trophy = _interopRequireDefault(require("../../icons/Trophy"));

var _Flame = _interopRequireDefault(require("../../icons/Flame"));

var _Staff = _interopRequireDefault(require("../../icons/Staff"));

var _ShieldFlash = _interopRequireDefault(require("../../icons/ShieldFlash"));

var _ChevronFilledRight = _interopRequireDefault(require("../../icons/ChevronFilledRight"));

var _Cut = _interopRequireDefault(require("../../icons/Cut"));

var _ChevronArrowUp = _interopRequireDefault(require("../../icons/ChevronArrowUp"));

var _Rocket = _interopRequireDefault(require("../../icons/Rocket"));

var _Text = _interopRequireDefault(require("../../icons/Text"));

var _Company = _interopRequireDefault(require("../../icons/Company"));

var _DoubleCheck = _interopRequireDefault(require("../../icons/DoubleCheck"));

var _ChevronFilledLeft = _interopRequireDefault(require("../../icons/ChevronFilledLeft"));

var _Certificate2 = _interopRequireDefault(require("../../icons/Certificate2"));

var _Chart = _interopRequireDefault(require("../../icons/Chart"));

var _Circle = _interopRequireDefault(require("../../icons/Circle"));

var _Briefcase = _interopRequireDefault(require("../../icons/Briefcase"));

var _ArrowDownRight = _interopRequireDefault(require("../../icons/ArrowDownRight"));

var _Send = _interopRequireDefault(require("../../icons/Send"));

const _excluded = ["children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = {
  title: "Icons",
  component: _Icon.default,
  argTypes: {
    fill: {
      control: "color"
    },
    smartColor: {
      control: "color"
    },
    stroke: {
      control: "color"
    }
  }
};
exports.default = _default;

const Template = _ref => {
  let {
    children
  } = _ref,
      args = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement(_Icon.default, args);
};

const Search = Template.bind({});
exports.Search = Search;
Search.args = {
  icon: _Search.default
};
const ChevronFilledDown = Template.bind({});
exports.ChevronFilledDown = ChevronFilledDown;
ChevronFilledDown.args = {
  icon: _ChevronFilledDown.default
};
const Info = Template.bind({});
exports.Info = Info;
Info.args = {
  icon: _Info.default
};
const Warning = Template.bind({});
exports.Warning = Warning;
Warning.args = {
  icon: _Warning.default
};
const Error = Template.bind({});
exports.Error = Error;
Error.args = {
  icon: _Error.default
};
const Check = Template.bind({});
exports.Check = Check;
Check.args = {
  icon: _Check.default
};
const Close = Template.bind({});
exports.Close = Close;
Close.args = {
  icon: _Close.default
};
const ScanCard = Template.bind({});
exports.ScanCard = ScanCard;
ScanCard.args = {
  icon: _ScanCard.default
};
const Card = Template.bind({});
exports.Card = Card;
Card.args = {
  icon: _Card.default
};
const ChevronArrowLeft = Template.bind({});
exports.ChevronArrowLeft = ChevronArrowLeft;
ChevronArrowLeft.args = {
  icon: _ChevronArrowLeft.default
};
const ChevronArrowRight = Template.bind({});
exports.ChevronArrowRight = ChevronArrowRight;
ChevronArrowRight.args = {
  icon: _ChevronArrowRight.default
};
const Calendar = Template.bind({});
exports.Calendar = Calendar;
Calendar.args = {
  icon: _Calendar.default
};
const Cart = Template.bind({});
exports.Cart = Cart;
Cart.args = {
  icon: _Cart.default
};
const Tag = Template.bind({});
exports.Tag = Tag;
Tag.args = {
  icon: _Tag.default
};
const Wallet = Template.bind({});
exports.Wallet = Wallet;
Wallet.args = {
  icon: _Wallet.default
};
const Cash = Template.bind({});
exports.Cash = Cash;
Cash.args = {
  icon: _Cash.default
};
const Gift = Template.bind({});
exports.Gift = Gift;
Gift.args = {
  icon: _Gift.default
};
const Voucher = Template.bind({});
exports.Voucher = Voucher;
Voucher.args = {
  icon: _Voucher.default
};
const Location = Template.bind({});
exports.Location = Location;
Location.args = {
  icon: _Location.default
};
const Profile = Template.bind({});
exports.Profile = Profile;
Profile.args = {
  icon: _Profile.default
};
const AddUser = Template.bind({});
exports.AddUser = AddUser;
AddUser.args = {
  icon: _AddUser.default
};
const Shop = Template.bind({});
exports.Shop = Shop;
Shop.args = {
  icon: _Shop.default
};
const Bank = Template.bind({});
exports.Bank = Bank;
Bank.args = {
  icon: _Bank.default
};
const File = Template.bind({});
exports.File = File;
File.args = {
  icon: _File.default
};
const Document = Template.bind({});
exports.Document = Document;
Document.args = {
  icon: _Document.default
};
const AddFile = Template.bind({});
exports.AddFile = AddFile;
AddFile.args = {
  icon: _AddFile.default
};
const Edit = Template.bind({});
exports.Edit = Edit;
Edit.args = {
  icon: _Edit.default
};
const Edit2 = Template.bind({});
exports.Edit2 = Edit2;
Edit2.args = {
  icon: _Edit2.default
};
const Copy = Template.bind({});
exports.Copy = Copy;
Copy.args = {
  icon: _Copy.default
};
const AddItem = Template.bind({});
exports.AddItem = AddItem;
AddItem.args = {
  icon: _AddItem.default
};
const SelectItem = Template.bind({});
exports.SelectItem = SelectItem;
SelectItem.args = {
  icon: _SelectItem.default
};
const Funnel = Template.bind({});
exports.Funnel = Funnel;
Funnel.args = {
  icon: _Funnel.default
};
const Crop = Template.bind({});
exports.Crop = Crop;
Crop.args = {
  icon: _Crop.default
};
const Command = Template.bind({});
exports.Command = Command;
Command.args = {
  icon: _Command.default
};
const Stack = Template.bind({});
exports.Stack = Stack;
Stack.args = {
  icon: _Stack.default
};
const Power = Template.bind({});
exports.Power = Power;
Power.args = {
  icon: _Power.default
};
const Lock = Template.bind({});
exports.Lock = Lock;
Lock.args = {
  icon: _Lock.default
};
const Unlock = Template.bind({});
exports.Unlock = Unlock;
Unlock.args = {
  icon: _Unlock.default
};
const Attachment = Template.bind({});
exports.Attachment = Attachment;
Attachment.args = {
  icon: _Attachment.default
};
const InfoOutline = Template.bind({});
exports.InfoOutline = InfoOutline;
InfoOutline.args = {
  icon: _InfoOutline.default
};
const PlayCircle = Template.bind({});
exports.PlayCircle = PlayCircle;
PlayCircle.args = {
  icon: _PlayCircle.default
};
const StopCircle = Template.bind({});
exports.StopCircle = StopCircle;
StopCircle.args = {
  icon: _StopCircle.default
};
const Pie = Template.bind({});
exports.Pie = Pie;
Pie.args = {
  icon: _Pie.default
};
const AddCircle = Template.bind({});
exports.AddCircle = AddCircle;
AddCircle.args = {
  icon: _AddCircle.default
};
const CloseCircle = Template.bind({});
exports.CloseCircle = CloseCircle;
CloseCircle.args = {
  icon: _CloseCircle.default
};
const ErrorCircle = Template.bind({});
exports.ErrorCircle = ErrorCircle;
ErrorCircle.args = {
  icon: _ErrorCircle.default
};
const CheckCircle = Template.bind({});
exports.CheckCircle = CheckCircle;
CheckCircle.args = {
  icon: _CheckCircle.default
};
const Expand = Template.bind({});
exports.Expand = Expand;
Expand.args = {
  icon: _Expand.default
};
const Compress = Template.bind({});
exports.Compress = Compress;
Compress.args = {
  icon: _Compress.default
};
const Compress2 = Template.bind({});
exports.Compress2 = Compress2;
Compress2.args = {
  icon: _Compress2.default
};
const Expand2 = Template.bind({});
exports.Expand2 = Expand2;
Expand2.args = {
  icon: _Expand2.default
};
const FullScreen = Template.bind({});
exports.FullScreen = FullScreen;
FullScreen.args = {
  icon: _FullScreen.default
};
const ExitFullScreen = Template.bind({});
exports.ExitFullScreen = ExitFullScreen;
ExitFullScreen.args = {
  icon: _ExitFullScreen.default
};
const Increase = Template.bind({});
exports.Increase = Increase;
Increase.args = {
  icon: _Increase.default
};
const Decrease = Template.bind({});
exports.Decrease = Decrease;
Decrease.args = {
  icon: _Decrease.default
};
const Add = Template.bind({});
exports.Add = Add;
Add.args = {
  icon: _Add.default
};
const Grid = Template.bind({});
exports.Grid = Grid;
Grid.args = {
  icon: _Grid.default
};
const List = Template.bind({});
exports.List = List;
List.args = {
  icon: _List.default
};
const Apps = Template.bind({});
exports.Apps = Apps;
Apps.args = {
  icon: _Apps.default
};
const MenuV = Template.bind({});
exports.MenuV = MenuV;
MenuV.args = {
  icon: _MenuV.default
};
const MenuH = Template.bind({});
exports.MenuH = MenuH;
MenuH.args = {
  icon: _MenuH.default
};
const Scroll = Template.bind({});
exports.Scroll = Scroll;
Scroll.args = {
  icon: _Scroll.default
};
const Details = Template.bind({});
exports.Details = Details;
Details.args = {
  icon: _Details.default
};
const Print = Template.bind({});
exports.Print = Print;
Print.args = {
  icon: _Print.default
};
const Alarm = Template.bind({});
exports.Alarm = Alarm;
Alarm.args = {
  icon: _Alarm.default
};
const Stopwatch = Template.bind({});
exports.Stopwatch = Stopwatch;
Stopwatch.args = {
  icon: _Stopwatch.default
};
const Time = Template.bind({});
exports.Time = Time;
Time.args = {
  icon: _Time.default
};
const Sound = Template.bind({});
exports.Sound = Sound;
Sound.args = {
  icon: _Sound.default
};
const Mute = Template.bind({});
exports.Mute = Mute;
Mute.args = {
  icon: _Mute.default
};
const MicOff = Template.bind({});
exports.MicOff = MicOff;
MicOff.args = {
  icon: _MicOff.default
};
const Eye = Template.bind({});
exports.Eye = Eye;
Eye.args = {
  icon: _Eye.default
};
const EyeOff = Template.bind({});
exports.EyeOff = EyeOff;
EyeOff.args = {
  icon: _EyeOff.default
};
const Video = Template.bind({});
exports.Video = Video;
Video.args = {
  icon: _Video.default
};
const VideoOff = Template.bind({});
exports.VideoOff = VideoOff;
VideoOff.args = {
  icon: _VideoOff.default
};
const Dial = Template.bind({});
exports.Dial = Dial;
Dial.args = {
  icon: _Dial.default
};
const DialOff = Template.bind({});
exports.DialOff = DialOff;
DialOff.args = {
  icon: _DialOff.default
};
const Mic = Template.bind({});
exports.Mic = Mic;
Mic.args = {
  icon: _Mic.default
};
const Share = Template.bind({});
exports.Share = Share;
Share.args = {
  icon: _Share.default
};
const CloudUpload = Template.bind({});
exports.CloudUpload = CloudUpload;
CloudUpload.args = {
  icon: _CloudUpload.default
};
const CloudDownload = Template.bind({});
exports.CloudDownload = CloudDownload;
CloudDownload.args = {
  icon: _CloudDownload.default
};
const Sun = Template.bind({});
exports.Sun = Sun;
Sun.args = {
  icon: _Sun.default
};
const Moon = Template.bind({});
exports.Moon = Moon;
Moon.args = {
  icon: _Moon.default
};
const CloudRain = Template.bind({});
exports.CloudRain = CloudRain;
CloudRain.args = {
  icon: _CloudRain.default
};
const Cloud = Template.bind({});
exports.Cloud = Cloud;
Cloud.args = {
  icon: _Cloud.default
};
const CloudFlash = Template.bind({});
exports.CloudFlash = CloudFlash;
CloudFlash.args = {
  icon: _CloudFlash.default
};
const NotificationBell = Template.bind({});
exports.NotificationBell = NotificationBell;
NotificationBell.args = {
  icon: _NotificationBell.default
};
const Inbox = Template.bind({});
exports.Inbox = Inbox;
Inbox.args = {
  icon: _Inbox.default
};
const Home = Template.bind({});
exports.Home = Home;
Home.args = {
  icon: _Home.default
};
const Image = Template.bind({});
exports.Image = Image;
Image.args = {
  icon: _Image.default
};
const Basket = Template.bind({});
exports.Basket = Basket;
Basket.args = {
  icon: _Basket.default
};
const Folder = Template.bind({});
exports.Folder = Folder;
Folder.args = {
  icon: _Folder.default
};
const Chat = Template.bind({});
exports.Chat = Chat;
Chat.args = {
  icon: _Chat.default
};
const Star = Template.bind({});
exports.Star = Star;
Star.args = {
  icon: _Star.default
};
const Link = Template.bind({});
exports.Link = Link;
Link.args = {
  icon: _Link.default
};
const Pulse = Template.bind({});
exports.Pulse = Pulse;
Pulse.args = {
  icon: _Pulse.default
};
const Music = Template.bind({});
exports.Music = Music;
Music.args = {
  icon: _Music.default
};
const BarChart = Template.bind({});
exports.BarChart = BarChart;
BarChart.args = {
  icon: _BarChart.default
};
const Table = Template.bind({});
exports.Table = Table;
Table.args = {
  icon: _Table.default
};
const Wave = Template.bind({});
exports.Wave = Wave;
Wave.args = {
  icon: _Wave.default
};
const Book = Template.bind({});
exports.Book = Book;
Book.args = {
  icon: _Book.default
};
const Login = Template.bind({});
exports.Login = Login;
Login.args = {
  icon: _Login.default
};
const Logout = Template.bind({});
exports.Logout = Logout;
Logout.args = {
  icon: _Logout.default
};
const Logout2 = Template.bind({});
exports.Logout2 = Logout2;
Logout2.args = {
  icon: _Logout2.default
};
const Login2 = Template.bind({});
exports.Login2 = Login2;
Login2.args = {
  icon: _Login2.default
};
const Download = Template.bind({});
exports.Download = Download;
Download.args = {
  icon: _Download.default
};
const Camera = Template.bind({});
exports.Camera = Camera;
Camera.args = {
  icon: _Camera.default
};
const Bookmark = Template.bind({});
exports.Bookmark = Bookmark;
Bookmark.args = {
  icon: _Bookmark.default
};
const AddBookmark = Template.bind({});
exports.AddBookmark = AddBookmark;
AddBookmark.args = {
  icon: _AddBookmark.default
};
const Heart = Template.bind({});
exports.Heart = Heart;
Heart.args = {
  icon: _Heart.default
};
const HeartFilled = Template.bind({});
exports.HeartFilled = HeartFilled;
HeartFilled.args = {
  icon: _HeartFilled.default
};
const Menu = Template.bind({});
exports.Menu = Menu;
Menu.args = {
  icon: _Menu.default
};
const Menu2 = Template.bind({});
exports.Menu2 = Menu2;
Menu2.args = {
  icon: _Menu2.default
};
const Menu3 = Template.bind({});
exports.Menu3 = Menu3;
Menu3.args = {
  icon: _Menu3.default
};
const Menu4 = Template.bind({});
exports.Menu4 = Menu4;
Menu4.args = {
  icon: _Menu4.default
};
const Menu5 = Template.bind({});
exports.Menu5 = Menu5;
Menu5.args = {
  icon: _Menu5.default
};
const Menu6 = Template.bind({});
exports.Menu6 = Menu6;
Menu6.args = {
  icon: _Menu6.default
};
const Menu7 = Template.bind({});
exports.Menu7 = Menu7;
Menu7.args = {
  icon: _Menu7.default
};
const Menu8 = Template.bind({});
exports.Menu8 = Menu8;
Menu8.args = {
  icon: _Menu8.default
};
const Settings = Template.bind({});
exports.Settings = Settings;
Settings.args = {
  icon: _Settings.default
};
const Upload = Template.bind({});
exports.Upload = Upload;
Upload.args = {
  icon: _Upload.default
};
const JustifyAlign = Template.bind({});
exports.JustifyAlign = JustifyAlign;
JustifyAlign.args = {
  icon: _JustifyAlign.default
};
const LeftAlign = Template.bind({});
exports.LeftAlign = LeftAlign;
LeftAlign.args = {
  icon: _LeftAlign.default
};
const CenterAlign = Template.bind({});
exports.CenterAlign = CenterAlign;
CenterAlign.args = {
  icon: _CenterAlign.default
};
const RightAlign = Template.bind({});
exports.RightAlign = RightAlign;
RightAlign.args = {
  icon: _RightAlign.default
};
const Network = Template.bind({});
exports.Network = Network;
Network.args = {
  icon: _Network.default
};
const List2 = Template.bind({});
exports.List2 = List2;
List2.args = {
  icon: _List2.default
};
const Filter = Template.bind({});
exports.Filter = Filter;
Filter.args = {
  icon: _Filter.default
};
const Previous = Template.bind({});
exports.Previous = Previous;
Previous.args = {
  icon: _Previous.default
};
const Next = Template.bind({});
exports.Next = Next;
Next.args = {
  icon: _Next.default
};
const Sort = Template.bind({});
exports.Sort = Sort;
Sort.args = {
  icon: _Sort.default
};
const Increase2 = Template.bind({});
exports.Increase2 = Increase2;
Increase2.args = {
  icon: _Increase2.default
};
const Pause = Template.bind({});
exports.Pause = Pause;
Pause.args = {
  icon: _Pause.default
};
const VerticalArrows = Template.bind({});
exports.VerticalArrows = VerticalArrows;
VerticalArrows.args = {
  icon: _VerticalArrows.default
};
const Play = Template.bind({});
exports.Play = Play;
Play.args = {
  icon: _Play.default
};
const Forward = Template.bind({});
exports.Forward = Forward;
Forward.args = {
  icon: _Forward.default
};
const Move = Template.bind({});
exports.Move = Move;
Move.args = {
  icon: _Move.default
};
const ChevronArrowDown = Template.bind({});
exports.ChevronArrowDown = ChevronArrowDown;
ChevronArrowDown.args = {
  icon: _ChevronArrowDown.default
};
const RotateLeft = Template.bind({});
exports.RotateLeft = RotateLeft;
RotateLeft.args = {
  icon: _RotateLeft.default
};
const RotateRight = Template.bind({});
exports.RotateRight = RotateRight;
RotateRight.args = {
  icon: _RotateRight.default
};
const Decrease2 = Template.bind({});
exports.Decrease2 = Decrease2;
Decrease2.args = {
  icon: _Decrease2.default
};
const ArrowUp = Template.bind({});
exports.ArrowUp = ArrowUp;
ArrowUp.args = {
  icon: _ArrowUp.default
};
const Transfer = Template.bind({});
exports.Transfer = Transfer;
Transfer.args = {
  icon: _Transfer.default
};
const Pin = Template.bind({});
exports.Pin = Pin;
Pin.args = {
  icon: _Pin.default
};
const BendLeft = Template.bind({});
exports.BendLeft = BendLeft;
BendLeft.args = {
  icon: _BendLeft.default
};
const BendRight = Template.bind({});
exports.BendRight = BendRight;
BendRight.args = {
  icon: _BendRight.default
};
const SortAscending = Template.bind({});
exports.SortAscending = SortAscending;
SortAscending.args = {
  icon: _SortAscending.default
};
const SortDescending = Template.bind({});
exports.SortDescending = SortDescending;
SortDescending.args = {
  icon: _SortDescending.default
};
const Refresh = Template.bind({});
exports.Refresh = Refresh;
Refresh.args = {
  icon: _Refresh.default
};
const ArrowLeft = Template.bind({});
exports.ArrowLeft = ArrowLeft;
ArrowLeft.args = {
  icon: _ArrowLeft.default
};
const ArrowRight = Template.bind({});
exports.ArrowRight = ArrowRight;
ArrowRight.args = {
  icon: _ArrowRight.default
};
const ArrowDown = Template.bind({});
exports.ArrowDown = ArrowDown;
ArrowDown.args = {
  icon: _ArrowDown.default
};
const Avatar = Template.bind({});
exports.Avatar = Avatar;
Avatar.args = {
  icon: _Avatar.default
};
const Flash = Template.bind({});
exports.Flash = Flash;
Flash.args = {
  icon: _Flash.default
};
const Sort2 = Template.bind({});
exports.Sort2 = Sort2;
Sort2.args = {
  icon: _Sort2.default
};
const Reload = Template.bind({});
exports.Reload = Reload;
Reload.args = {
  icon: _Reload.default
};
const Withdraw = Template.bind({});
exports.Withdraw = Withdraw;
Withdraw.args = {
  icon: _Withdraw.default
};
const Compass = Template.bind({});
exports.Compass = Compass;
Compass.args = {
  icon: _Compass.default
};
const Globe = Template.bind({});
exports.Globe = Globe;
Globe.args = {
  icon: _Globe.default
};
const ExternalLink = Template.bind({});
exports.ExternalLink = ExternalLink;
ExternalLink.args = {
  icon: _ExternalLink.default
};
const ChevronFilledUp = Template.bind({});
exports.ChevronFilledUp = ChevronFilledUp;
ChevronFilledUp.args = {
  icon: _ChevronFilledUp.default
};
const Drop = Template.bind({});
exports.Drop = Drop;
Drop.args = {
  icon: _Drop.default
};
const Deposits = Template.bind({});
exports.Deposits = Deposits;
Deposits.args = {
  icon: _Deposits.default
};
const Shield = Template.bind({});
exports.Shield = Shield;
Shield.args = {
  icon: _Shield.default
};
const Gem = Template.bind({});
exports.Gem = Gem;
Gem.args = {
  icon: _Gem.default
};
const ShieldCheck = Template.bind({});
exports.ShieldCheck = ShieldCheck;
ShieldCheck.args = {
  icon: _ShieldCheck.default
};
const Flag = Template.bind({});
exports.Flag = Flag;
Flag.args = {
  icon: _Flag.default
};
const ArrowUpRight = Template.bind({});
exports.ArrowUpRight = ArrowUpRight;
ArrowUpRight.args = {
  icon: _ArrowUpRight.default
};
const Bolt = Template.bind({});
exports.Bolt = Bolt;
Bolt.args = {
  icon: _Bolt.default
};
const Announce = Template.bind({});
exports.Announce = Announce;
Announce.args = {
  icon: _Announce.default
};
const Delete = Template.bind({});
exports.Delete = Delete;
Delete.args = {
  icon: _Delete.default
};
const Disabled = Template.bind({});
exports.Disabled = Disabled;
Disabled.args = {
  icon: _Disabled.default
};
const Certificate = Template.bind({});
exports.Certificate = Certificate;
Certificate.args = {
  icon: _Certificate.default
};
const Key = Template.bind({});
exports.Key = Key;
Key.args = {
  icon: _Key.default
};
const Crown = Template.bind({});
exports.Crown = Crown;
Crown.args = {
  icon: _Crown.default
};
const ArrowUpLeft = Template.bind({});
exports.ArrowUpLeft = ArrowUpLeft;
ArrowUpLeft.args = {
  icon: _ArrowUpLeft.default
};
const Support = Template.bind({});
exports.Support = Support;
Support.args = {
  icon: _Support.default
};
const Trophy = Template.bind({});
exports.Trophy = Trophy;
Trophy.args = {
  icon: _Trophy.default
};
const Flame = Template.bind({});
exports.Flame = Flame;
Flame.args = {
  icon: _Flame.default
};
const Staff = Template.bind({});
exports.Staff = Staff;
Staff.args = {
  icon: _Staff.default
};
const ShieldFlash = Template.bind({});
exports.ShieldFlash = ShieldFlash;
ShieldFlash.args = {
  icon: _ShieldFlash.default
};
const ChevronFilledRight = Template.bind({});
exports.ChevronFilledRight = ChevronFilledRight;
ChevronFilledRight.args = {
  icon: _ChevronFilledRight.default
};
const Cut = Template.bind({});
exports.Cut = Cut;
Cut.args = {
  icon: _Cut.default
};
const ChevronArrowUp = Template.bind({});
exports.ChevronArrowUp = ChevronArrowUp;
ChevronArrowUp.args = {
  icon: _ChevronArrowUp.default
};
const Rocket = Template.bind({});
exports.Rocket = Rocket;
Rocket.args = {
  icon: _Rocket.default
};
const Text = Template.bind({});
exports.Text = Text;
Text.args = {
  icon: _Text.default
};
const Company = Template.bind({});
exports.Company = Company;
Company.args = {
  icon: _Company.default
};
const DoubleCheck = Template.bind({});
exports.DoubleCheck = DoubleCheck;
DoubleCheck.args = {
  icon: _DoubleCheck.default
};
const ChevronFilledLeft = Template.bind({});
exports.ChevronFilledLeft = ChevronFilledLeft;
ChevronFilledLeft.args = {
  icon: _ChevronFilledLeft.default
};
const Certificate2 = Template.bind({});
exports.Certificate2 = Certificate2;
Certificate2.args = {
  icon: _Certificate2.default
};
const Chart = Template.bind({});
exports.Chart = Chart;
Chart.args = {
  icon: _Chart.default
};
const Circle = Template.bind({});
exports.Circle = Circle;
Circle.args = {
  icon: _Circle.default
};
const Briefcase = Template.bind({});
exports.Briefcase = Briefcase;
Briefcase.args = {
  icon: _Briefcase.default
};
const ArrowDownRight = Template.bind({});
exports.ArrowDownRight = ArrowDownRight;
ArrowDownRight.args = {
  icon: _ArrowDownRight.default
};
const Send = Template.bind({});
exports.Send = Send;
Send.args = {
  icon: _Send.default
};