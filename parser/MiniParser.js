// Generated from parser/Mini.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');
var MiniListener = require('./MiniListener').MiniListener;
var grammarFileName = "Mini.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003%\u0107\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u0002+\n\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0005",
    "\u00043\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004g\n\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0007\u0004\u009b\n\u0004\f\u0004\u000e\u0004\u009e",
    "\u000b\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007",
    "\u00aa\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0005\b\u00b5\n\b\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0005\t\u00bb\n\t\u0003\n\u0003\n\u0003\n\u0003\n\u0007\n\u00c1\n\n",
    "\f\n\u000e\n\u00c4\u000b\n\u0005\n\u00c6\n\n\u0003\n\u0003\n\u0003\n",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0007\u000b\u00d3\n\u000b\f\u000b\u000e\u000b",
    "\u00d6\u000b\u000b\u0005\u000b\u00d8\n\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0003\f\u0007\f\u00e0\n\f\f\f\u000e\f\u00e3",
    "\u000b\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0005",
    "\r\u00ec\n\r\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u00f1\n",
    "\u000e\u0007\u000e\u00f3\n\u000e\f\u000e\u000e\u000e\u00f6\u000b\u000e",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u00fb\n\u000f\u0007",
    "\u000f\u00fd\n\u000f\f\u000f\u000e\u000f\u0100\u000b\u000f\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0002\u0003",
    "\u0006\u0011\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018",
    "\u001a\u001c\u001e\u0002\u0007\u0003\u0002\u0006\b\u0003\u0002\n\f\u0003",
    "\u0002\u0007\b\u0003\u0002\r\u0010\u0003\u0002\u0011\u0012\u0120\u0002",
    "*\u0003\u0002\u0002\u0002\u0004,\u0003\u0002\u0002\u0002\u0006f\u0003",
    "\u0002\u0002\u0002\b\u009f\u0003\u0002\u0002\u0002\n\u00a3\u0003\u0002",
    "\u0002\u0002\f\u00a5\u0003\u0002\u0002\u0002\u000e\u00b4\u0003\u0002",
    "\u0002\u0002\u0010\u00ba\u0003\u0002\u0002\u0002\u0012\u00bc\u0003\u0002",
    "\u0002\u0002\u0014\u00ca\u0003\u0002\u0002\u0002\u0016\u00dc\u0003\u0002",
    "\u0002\u0002\u0018\u00eb\u0003\u0002\u0002\u0002\u001a\u00ed\u0003\u0002",
    "\u0002\u0002\u001c\u00f7\u0003\u0002\u0002\u0002\u001e\u0101\u0003\u0002",
    "\u0002\u0002 !\u0005\u0004\u0003\u0002!\"\u0007\u0002\u0002\u0003\"",
    "#\b\u0002\u0001\u0002#+\u0003\u0002\u0002\u0002$%\u0007 \u0002\u0002",
    "%&\u0007$\u0002\u0002&\'\u0005\u0004\u0003\u0002\'(\u0007\u0002\u0002",
    "\u0003()\b\u0002\u0001\u0002)+\u0003\u0002\u0002\u0002* \u0003\u0002",
    "\u0002\u0002*$\u0003\u0002\u0002\u0002+\u0003\u0003\u0002\u0002\u0002",
    ",-\u0005\u0006\u0004\u0002-.\b\u0003\u0001\u0002.\u0005\u0003\u0002",
    "\u0002\u0002/0\b\u0004\u0001\u000202\u0007\u0003\u0002\u000213\u0007",
    " \u0002\u000221\u0003\u0002\u0002\u000223\u0003\u0002\u0002\u000234",
    "\u0003\u0002\u0002\u00024g\b\u0004\u0001\u000256\t\u0002\u0002\u0002",
    "67\u0005\u0006\u0004\u001878\b\u0004\u0001\u00028g\u0003\u0002\u0002",
    "\u00029:\u0007\u001e\u0002\u0002:g\b\u0004\u0001\u0002;<\u0005\u0010",
    "\t\u0002<=\b\u0004\u0001\u0002=g\u0003\u0002\u0002\u0002>?\u0005\b\u0005",
    "\u0002?@\b\u0004\u0001\u0002@g\u0003\u0002\u0002\u0002AB\u0005\n\u0006",
    "\u0002BC\b\u0004\u0001\u0002Cg\u0003\u0002\u0002\u0002DE\u0007 \u0002",
    "\u0002EF\u0006\u0004\u0002\u0002Fg\b\u0004\u0001\u0002GH\u0005\f\u0007",
    "\u0002HI\b\u0004\u0001\u0002Ig\u0003\u0002\u0002\u0002JK\u0005\u000e",
    "\b\u0002KL\b\u0004\u0001\u0002Lg\u0003\u0002\u0002\u0002MN\u0007\u0016",
    "\u0002\u0002NO\u0005\u0006\u0004\u0002OP\u0007\u0017\u0002\u0002PQ\b",
    "\u0004\u0001\u0002Qg\u0003\u0002\u0002\u0002RS\u0005\u0012\n\u0002S",
    "T\b\u0004\u0001\u0002Tg\u0003\u0002\u0002\u0002UV\u0005\u0014\u000b",
    "\u0002VW\b\u0004\u0001\u0002Wg\u0003\u0002\u0002\u0002XY\u0007#\u0002",
    "\u0002Yg\b\u0004\u0001\u0002Z[\u0007\u0018\u0002\u0002[\\\u0007\u0019",
    "\u0002\u0002\\]\u0005\u0006\u0004\u0004]^\b\u0004\u0001\u0002^g\u0003",
    "\u0002\u0002\u0002_`\u0007\u0018\u0002\u0002`a\u0007\u0016\u0002\u0002",
    "ab\u0005\u0016\f\u0002bc\u0007\u0017\u0002\u0002cd\u0005\u0006\u0004",
    "\u0003de\b\u0004\u0001\u0002eg\u0003\u0002\u0002\u0002f/\u0003\u0002",
    "\u0002\u0002f5\u0003\u0002\u0002\u0002f9\u0003\u0002\u0002\u0002f;\u0003",
    "\u0002\u0002\u0002f>\u0003\u0002\u0002\u0002fA\u0003\u0002\u0002\u0002",
    "fD\u0003\u0002\u0002\u0002fG\u0003\u0002\u0002\u0002fJ\u0003\u0002\u0002",
    "\u0002fM\u0003\u0002\u0002\u0002fR\u0003\u0002\u0002\u0002fU\u0003\u0002",
    "\u0002\u0002fX\u0003\u0002\u0002\u0002fZ\u0003\u0002\u0002\u0002f_\u0003",
    "\u0002\u0002\u0002g\u009c\u0003\u0002\u0002\u0002hi\f\u0017\u0002\u0002",
    "ij\u0007\t\u0002\u0002jk\u0005\u0006\u0004\u0018kl\b\u0004\u0001\u0002",
    "l\u009b\u0003\u0002\u0002\u0002mn\f\u0016\u0002\u0002no\t\u0003\u0002",
    "\u0002op\u0005\u0006\u0004\u0017pq\b\u0004\u0001\u0002q\u009b\u0003",
    "\u0002\u0002\u0002rs\f\u0015\u0002\u0002st\t\u0004\u0002\u0002tu\u0005",
    "\u0006\u0004\u0016uv\b\u0004\u0001\u0002v\u009b\u0003\u0002\u0002\u0002",
    "wx\f\u0014\u0002\u0002xy\t\u0005\u0002\u0002yz\u0005\u0006\u0004\u0015",
    "z{\b\u0004\u0001\u0002{\u009b\u0003\u0002\u0002\u0002|}\f\u0013\u0002",
    "\u0002}~\t\u0006\u0002\u0002~\u007f\u0005\u0006\u0004\u0014\u007f\u0080",
    "\b\u0004\u0001\u0002\u0080\u009b\u0003\u0002\u0002\u0002\u0081\u0082",
    "\f\u0012\u0002\u0002\u0082\u0083\u0007\u0013\u0002\u0002\u0083\u0084",
    "\u0005\u0006\u0004\u0013\u0084\u0085\b\u0004\u0001\u0002\u0085\u009b",
    "\u0003\u0002\u0002\u0002\u0086\u0087\f\u0011\u0002\u0002\u0087\u0088",
    "\u0007\u0014\u0002\u0002\u0088\u0089\u0005\u0006\u0004\u0012\u0089\u008a",
    "\b\u0004\u0001\u0002\u008a\u009b\u0003\u0002\u0002\u0002\u008b\u008c",
    "\f\u001a\u0002\u0002\u008c\u008d\u0007\u0003\u0002\u0002\u008d\u008e",
    "\u0007 \u0002\u0002\u008e\u009b\b\u0004\u0001\u0002\u008f\u0090\f\u0019",
    "\u0002\u0002\u0090\u0091\u0007\u0004\u0002\u0002\u0091\u0092\u0005\u0006",
    "\u0004\u0002\u0092\u0093\u0007\u0005\u0002\u0002\u0093\u0094\b\u0004",
    "\u0001\u0002\u0094\u009b\u0003\u0002\u0002\u0002\u0095\u0096\f\u0010",
    "\u0002\u0002\u0096\u0097\u0007\u0015\u0002\u0002\u0097\u0098\u0005\u000e",
    "\b\u0002\u0098\u0099\b\u0004\u0001\u0002\u0099\u009b\u0003\u0002\u0002",
    "\u0002\u009ah\u0003\u0002\u0002\u0002\u009am\u0003\u0002\u0002\u0002",
    "\u009ar\u0003\u0002\u0002\u0002\u009aw\u0003\u0002\u0002\u0002\u009a",
    "|\u0003\u0002\u0002\u0002\u009a\u0081\u0003\u0002\u0002\u0002\u009a",
    "\u0086\u0003\u0002\u0002\u0002\u009a\u008b\u0003\u0002\u0002\u0002\u009a",
    "\u008f\u0003\u0002\u0002\u0002\u009a\u0095\u0003\u0002\u0002\u0002\u009b",
    "\u009e\u0003\u0002\u0002\u0002\u009c\u009a\u0003\u0002\u0002\u0002\u009c",
    "\u009d\u0003\u0002\u0002\u0002\u009d\u0007\u0003\u0002\u0002\u0002\u009e",
    "\u009c\u0003\u0002\u0002\u0002\u009f\u00a0\u0007\u001f\u0002\u0002\u00a0",
    "\u00a1\u0007\u001a\u0002\u0002\u00a1\u00a2\u0007\u001f\u0002\u0002\u00a2",
    "\t\u0003\u0002\u0002\u0002\u00a3\u00a4\u0007\u001f\u0002\u0002\u00a4",
    "\u000b\u0003\u0002\u0002\u0002\u00a5\u00a6\u0007 \u0002\u0002\u00a6",
    "\u00a9\u0007\u0006\u0002\u0002\u00a7\u00aa\u0005\n\u0006\u0002\u00a8",
    "\u00aa\u0005\b\u0005\u0002\u00a9\u00a7\u0003\u0002\u0002\u0002\u00a9",
    "\u00a8\u0003\u0002\u0002\u0002\u00aa\r\u0003\u0002\u0002\u0002\u00ab",
    "\u00ac\u0007 \u0002\u0002\u00ac\u00ad\u0007\u0019\u0002\u0002\u00ad",
    "\u00b5\b\b\u0001\u0002\u00ae\u00af\u0007 \u0002\u0002\u00af\u00b0\u0007",
    "\u0016\u0002\u0002\u00b0\u00b1\u0005\u0018\r\u0002\u00b1\u00b2\u0007",
    "\u0017\u0002\u0002\u00b2\u00b3\b\b\u0001\u0002\u00b3\u00b5\u0003\u0002",
    "\u0002\u0002\u00b4\u00ab\u0003\u0002\u0002\u0002\u00b4\u00ae\u0003\u0002",
    "\u0002\u0002\u00b5\u000f\u0003\u0002\u0002\u0002\u00b6\u00b7\u0007!",
    "\u0002\u0002\u00b7\u00bb\b\t\u0001\u0002\u00b8\u00b9\u0007\"\u0002\u0002",
    "\u00b9\u00bb\b\t\u0001\u0002\u00ba\u00b6\u0003\u0002\u0002\u0002\u00ba",
    "\u00b8\u0003\u0002\u0002\u0002\u00bb\u0011\u0003\u0002\u0002\u0002\u00bc",
    "\u00c5\u0007\u0004\u0002\u0002\u00bd\u00c2\u0005\u0004\u0003\u0002\u00be",
    "\u00bf\u0007\u001b\u0002\u0002\u00bf\u00c1\u0005\u0004\u0003\u0002\u00c0",
    "\u00be\u0003\u0002\u0002\u0002\u00c1\u00c4\u0003\u0002\u0002\u0002\u00c2",
    "\u00c0\u0003\u0002\u0002\u0002\u00c2\u00c3\u0003\u0002\u0002\u0002\u00c3",
    "\u00c6\u0003\u0002\u0002\u0002\u00c4\u00c2\u0003\u0002\u0002\u0002\u00c5",
    "\u00bd\u0003\u0002\u0002\u0002\u00c5\u00c6\u0003\u0002\u0002\u0002\u00c6",
    "\u00c7\u0003\u0002\u0002\u0002\u00c7\u00c8\u0007\u0005\u0002\u0002\u00c8",
    "\u00c9\b\n\u0001\u0002\u00c9\u0013\u0003\u0002\u0002\u0002\u00ca\u00d7",
    "\u0007\u001c\u0002\u0002\u00cb\u00cc\u0007 \u0002\u0002\u00cc\u00cd",
    "\u0007\u001a\u0002\u0002\u00cd\u00d4\u0005\u0004\u0003\u0002\u00ce\u00cf",
    "\u0007\u001b\u0002\u0002\u00cf\u00d0\u0007 \u0002\u0002\u00d0\u00d1",
    "\u0007\u001a\u0002\u0002\u00d1\u00d3\u0005\u0004\u0003\u0002\u00d2\u00ce",
    "\u0003\u0002\u0002\u0002\u00d3\u00d6\u0003\u0002\u0002\u0002\u00d4\u00d2",
    "\u0003\u0002\u0002\u0002\u00d4\u00d5\u0003\u0002\u0002\u0002\u00d5\u00d8",
    "\u0003\u0002\u0002\u0002\u00d6\u00d4\u0003\u0002\u0002\u0002\u00d7\u00cb",
    "\u0003\u0002\u0002\u0002\u00d7\u00d8\u0003\u0002\u0002\u0002\u00d8\u00d9",
    "\u0003\u0002\u0002\u0002\u00d9\u00da\u0007\u001d\u0002\u0002\u00da\u00db",
    "\b\u000b\u0001\u0002\u00db\u0015\u0003\u0002\u0002\u0002\u00dc\u00e1",
    "\u0007 \u0002\u0002\u00dd\u00de\u0007\u001b\u0002\u0002\u00de\u00e0",
    "\u0007 \u0002\u0002\u00df\u00dd\u0003\u0002\u0002\u0002\u00e0\u00e3",
    "\u0003\u0002\u0002\u0002\u00e1\u00df\u0003\u0002\u0002\u0002\u00e1\u00e2",
    "\u0003\u0002\u0002\u0002\u00e2\u0017\u0003\u0002\u0002\u0002\u00e3\u00e1",
    "\u0003\u0002\u0002\u0002\u00e4\u00ec\u0003\u0002\u0002\u0002\u00e5\u00ec",
    "\u0005\u001a\u000e\u0002\u00e6\u00ec\u0005\u001c\u000f\u0002\u00e7\u00e8",
    "\u0005\u001a\u000e\u0002\u00e8\u00e9\u0007\u001b\u0002\u0002\u00e9\u00ea",
    "\u0005\u001c\u000f\u0002\u00ea\u00ec\u0003\u0002\u0002\u0002\u00eb\u00e4",
    "\u0003\u0002\u0002\u0002\u00eb\u00e5\u0003\u0002\u0002\u0002\u00eb\u00e6",
    "\u0003\u0002\u0002\u0002\u00eb\u00e7\u0003\u0002\u0002\u0002\u00ec\u0019",
    "\u0003\u0002\u0002\u0002\u00ed\u00f4\u0005\u0004\u0003\u0002\u00ee\u00f0",
    "\u0007\u001b\u0002\u0002\u00ef\u00f1\u0005\u0004\u0003\u0002\u00f0\u00ef",
    "\u0003\u0002\u0002\u0002\u00f0\u00f1\u0003\u0002\u0002\u0002\u00f1\u00f3",
    "\u0003\u0002\u0002\u0002\u00f2\u00ee\u0003\u0002\u0002\u0002\u00f3\u00f6",
    "\u0003\u0002\u0002\u0002\u00f4\u00f2\u0003\u0002\u0002\u0002\u00f4\u00f5",
    "\u0003\u0002\u0002\u0002\u00f5\u001b\u0003\u0002\u0002\u0002\u00f6\u00f4",
    "\u0003\u0002\u0002\u0002\u00f7\u00fe\u0005\u001e\u0010\u0002\u00f8\u00fa",
    "\u0007\u001b\u0002\u0002\u00f9\u00fb\u0005\u001e\u0010\u0002\u00fa\u00f9",
    "\u0003\u0002\u0002\u0002\u00fa\u00fb\u0003\u0002\u0002\u0002\u00fb\u00fd",
    "\u0003\u0002\u0002\u0002\u00fc\u00f8\u0003\u0002\u0002\u0002\u00fd\u0100",
    "\u0003\u0002\u0002\u0002\u00fe\u00fc\u0003\u0002\u0002\u0002\u00fe\u00ff",
    "\u0003\u0002\u0002\u0002\u00ff\u001d\u0003\u0002\u0002\u0002\u0100\u00fe",
    "\u0003\u0002\u0002\u0002\u0101\u0102\u0007 \u0002\u0002\u0102\u0103",
    "\u0007$\u0002\u0002\u0103\u0104\u0005\u0004\u0003\u0002\u0104\u0105",
    "\b\u0010\u0001\u0002\u0105\u001f\u0003\u0002\u0002\u0002\u0014*2f\u009a",
    "\u009c\u00a9\u00b4\u00ba\u00c2\u00c5\u00d4\u00d7\u00e1\u00eb\u00f0\u00f4",
    "\u00fa\u00fe"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'.'", "'['", "']'", "'!'", "'+'", "'-'", "'^'", 
                     "'*'", "'/'", "'%'", "'<'", "'<='", "'>'", "'>='", 
                     "'=='", "'!='", "'&&'", "'||'", "'|'", "'('", "')'", 
                     "'fun'", "'()'", "':'", "','", "'{'", "'}'", null, 
                     null, null, null, null, null, "'='" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, "BOOLEAN", "CELL", "ID", "INT", "FLOAT", "STRING", 
                      "EQ", "WS" ];

var ruleNames =  [ "mini", "value", "expr", "range", "cell", "sheet_ref", 
                   "function_call", "number", "array", "object", "id_seq", 
                   "call_arguments", "positional_arguments", "named_arguments", 
                   "named_argument" ];

function MiniParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

MiniParser.prototype = Object.create(antlr4.Parser.prototype);
MiniParser.prototype.constructor = MiniParser;

Object.defineProperty(MiniParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

MiniParser.EOF = antlr4.Token.EOF;
MiniParser.T__0 = 1;
MiniParser.T__1 = 2;
MiniParser.T__2 = 3;
MiniParser.T__3 = 4;
MiniParser.T__4 = 5;
MiniParser.T__5 = 6;
MiniParser.T__6 = 7;
MiniParser.T__7 = 8;
MiniParser.T__8 = 9;
MiniParser.T__9 = 10;
MiniParser.T__10 = 11;
MiniParser.T__11 = 12;
MiniParser.T__12 = 13;
MiniParser.T__13 = 14;
MiniParser.T__14 = 15;
MiniParser.T__15 = 16;
MiniParser.T__16 = 17;
MiniParser.T__17 = 18;
MiniParser.T__18 = 19;
MiniParser.T__19 = 20;
MiniParser.T__20 = 21;
MiniParser.T__21 = 22;
MiniParser.T__22 = 23;
MiniParser.T__23 = 24;
MiniParser.T__24 = 25;
MiniParser.T__25 = 26;
MiniParser.T__26 = 27;
MiniParser.BOOLEAN = 28;
MiniParser.CELL = 29;
MiniParser.ID = 30;
MiniParser.INT = 31;
MiniParser.FLOAT = 32;
MiniParser.STRING = 33;
MiniParser.EQ = 34;
MiniParser.WS = 35;

MiniParser.RULE_mini = 0;
MiniParser.RULE_value = 1;
MiniParser.RULE_expr = 2;
MiniParser.RULE_range = 3;
MiniParser.RULE_cell = 4;
MiniParser.RULE_sheet_ref = 5;
MiniParser.RULE_function_call = 6;
MiniParser.RULE_number = 7;
MiniParser.RULE_array = 8;
MiniParser.RULE_object = 9;
MiniParser.RULE_id_seq = 10;
MiniParser.RULE_call_arguments = 11;
MiniParser.RULE_positional_arguments = 12;
MiniParser.RULE_named_arguments = 13;
MiniParser.RULE_named_argument = 14;

function MiniContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_mini;
    return this;
}

MiniContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MiniContext.prototype.constructor = MiniContext;

MiniContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

MiniContext.prototype.EOF = function() {
    return this.getToken(MiniParser.EOF, 0);
};

MiniContext.prototype.ID = function() {
    return this.getToken(MiniParser.ID, 0);
};

MiniContext.prototype.EQ = function() {
    return this.getToken(MiniParser.EQ, 0);
};

MiniContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterMini(this);
	}
};

MiniContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitMini(this);
	}
};




MiniParser.MiniContext = MiniContext;

MiniParser.prototype.mini = function() {

    var localctx = new MiniContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, MiniParser.RULE_mini);
    try {
        this.state = 40;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 30;
            this.value();
            this.state = 31;
            this.match(MiniParser.EOF);
             localctx.type = 'evaluation' 
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 34;
            this.match(MiniParser.ID);
            this.state = 35;
            this.match(MiniParser.EQ);
            this.state = 36;
            this.value();
            this.state = 37;
            this.match(MiniParser.EOF);
             localctx.type = 'definition'
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterValue(this);
	}
};

ValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitValue(this);
	}
};




MiniParser.ValueContext = ValueContext;

MiniParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, MiniParser.RULE_value);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 42;
        this.expr(0);
         localctx.type = 'value' 
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_expr;
    this.op = null; // Token
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.ID = function() {
    return this.getToken(MiniParser.ID, 0);
};

ExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprContext.prototype.BOOLEAN = function() {
    return this.getToken(MiniParser.BOOLEAN, 0);
};

ExprContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

ExprContext.prototype.range = function() {
    return this.getTypedRuleContext(RangeContext,0);
};

ExprContext.prototype.cell = function() {
    return this.getTypedRuleContext(CellContext,0);
};

ExprContext.prototype.sheet_ref = function() {
    return this.getTypedRuleContext(Sheet_refContext,0);
};

ExprContext.prototype.function_call = function() {
    return this.getTypedRuleContext(Function_callContext,0);
};

ExprContext.prototype.array = function() {
    return this.getTypedRuleContext(ArrayContext,0);
};

ExprContext.prototype.object = function() {
    return this.getTypedRuleContext(ObjectContext,0);
};

ExprContext.prototype.STRING = function() {
    return this.getToken(MiniParser.STRING, 0);
};

ExprContext.prototype.id_seq = function() {
    return this.getTypedRuleContext(Id_seqContext,0);
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitExpr(this);
	}
};



MiniParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 4;
    this.enterRecursionRule(localctx, 4, MiniParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 100;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.state = 46;
            this.match(MiniParser.T__0);
            this.state = 48;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
            if(la_===1) {
                this.state = 47;
                this.match(MiniParser.ID);

            }
             
                        localctx.type = 'select_id'
                    
            break;

        case 2:
            this.state = 51;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MiniParser.T__3) | (1 << MiniParser.T__4) | (1 << MiniParser.T__5))) !== 0))) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 52;
            this.expr(22);
             switch (localctx.op.text) {
                        case '!': localctx.type = 'not';               break
                        case '+': localctx.type = 'positive';          break
                        case '-': localctx.type = 'negative';          break
                    }
            break;

        case 3:
            this.state = 55;
            this.match(MiniParser.BOOLEAN);
             localctx.type = 'boolean' 
            break;

        case 4:
            this.state = 57;
            this.number();
             localctx.type = 'number' 
            break;

        case 5:
            this.state = 60;
            this.range();
             localctx.type = 'range' 
            break;

        case 6:
            this.state = 63;
            this.cell();
             localctx.type = 'cell' 
            break;

        case 7:
            this.state = 66;
            this.match(MiniParser.ID);
            this.state = 67;
            if (!( this._input.LA(1) !== MiniParser.EQ)) {
                throw new antlr4.error.FailedPredicateException(this, "this._input.LA(1) !== MiniParser.EQ");
            }
             localctx.type = 'var' 
            break;

        case 8:
            this.state = 69;
            this.sheet_ref();
             localctx.type = 'sheet-ref' 
            break;

        case 9:
            this.state = 72;
            this.function_call();
             localctx.type = '_call' 
            break;

        case 10:
            this.state = 75;
            this.match(MiniParser.T__19);
            this.state = 76;
            this.expr(0);
            this.state = 77;
            this.match(MiniParser.T__20);
             localctx.type = 'group' 
            break;

        case 11:
            this.state = 80;
            this.array();
             localctx.type = 'array' 
            break;

        case 12:
            this.state = 83;
            this.object();
             localctx.type = 'object' 
            break;

        case 13:
            this.state = 86;
            this.match(MiniParser.STRING);
             localctx.type = 'string' 
            break;

        case 14:
            this.state = 88;
            this.match(MiniParser.T__21);
            this.state = 89;
            this.match(MiniParser.T__22);
            this.state = 90;
            this.expr(2);
             localctx.type = 'function' 
            break;

        case 15:
            this.state = 93;
            this.match(MiniParser.T__21);
            this.state = 94;
            this.match(MiniParser.T__19);
            this.state = 95;
            this.id_seq();
            this.state = 96;
            this.match(MiniParser.T__20);
            this.state = 97;
            this.expr(1);
             localctx.type = 'function' 
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 154;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 152;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expr);
                    this.state = 102;
                    if (!( this.precpred(this._ctx, 21))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 21)");
                    }
<<<<<<< refs/remotes/origin/master
<<<<<<< refs/remotes/origin/master
                    this.state = 101;
                    this.match(MiniParser.T__9);
                    this.state = 102;
                    this.expr(20);

=======
                    this.state = 105;
=======
                    this.state = 103;
>>>>>>> Working iteration of functions with partial evaluation
                    this.match(MiniParser.T__6);
                    this.state = 104;
                    this.expr(22);
                     
>>>>>>> Introduces function type
                                          localctx.type = 'pow'
                                      
                    break;

                case 2:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expr);
                    this.state = 107;
                    if (!( this.precpred(this._ctx, 20))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 20)");
                    }
                    this.state = 108;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MiniParser.T__7) | (1 << MiniParser.T__8) | (1 << MiniParser.T__9))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 109;
                    this.expr(21);
                     switch (localctx.op.text) {
                                          case '*': localctx.type = 'multiply';          break
                                          case '/': localctx.type = 'divide';            break
                                          case '%': localctx.type = 'remainder';         break
                                      }
                    break;

                case 3:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expr);
                    this.state = 112;
                    if (!( this.precpred(this._ctx, 19))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
                    }
                    this.state = 113;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===MiniParser.T__4 || _la===MiniParser.T__5)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 114;
                    this.expr(20);

                                          localctx.type = (localctx.op.text === '+') ? 'add' : 'subtract'
                                      
                    break;

                case 4:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expr);
                    this.state = 117;
                    if (!( this.precpred(this._ctx, 18))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
                    }
                    this.state = 118;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MiniParser.T__10) | (1 << MiniParser.T__11) | (1 << MiniParser.T__12) | (1 << MiniParser.T__13))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 119;
                    this.expr(19);
                     switch (localctx.op.text) {
                                          case '<':  localctx.type = 'less';             break
                                          case '<=': localctx.type = 'less_or_equal';    break
                                          case '>':  localctx.type = 'greater';          break
                                          case '>=': localctx.type = 'greater_or_equal'; break
                                      }
                    break;

                case 5:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expr);
                    this.state = 122;
                    if (!( this.precpred(this._ctx, 17))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
                    }
                    this.state = 123;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===MiniParser.T__14 || _la===MiniParser.T__15)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
<<<<<<< refs/remotes/origin/master
<<<<<<< refs/remotes/origin/master
                    this.state = 122;
                    this.expr(16);

=======
                    this.state = 126;
=======
                    this.state = 124;
>>>>>>> Working iteration of functions with partial evaluation
                    this.expr(18);
                     
>>>>>>> Introduces function type
                                          localctx.type = (localctx.op.text === '==') ? 'equal' : 'not_equal'
                                      
                    break;

                case 6:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expr);
                    this.state = 127;
                    if (!( this.precpred(this._ctx, 16))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
                    }
                    this.state = 128;
                    this.match(MiniParser.T__16);
                    this.state = 129;
                    this.expr(17);
                     localctx.type = 'and' 
                    break;

                case 7:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expr);
                    this.state = 132;
                    if (!( this.precpred(this._ctx, 15))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                    }
                    this.state = 133;
                    this.match(MiniParser.T__17);
                    this.state = 134;
                    this.expr(16);
                     localctx.type = 'or' 
                    break;

                case 8:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expr);
                    this.state = 137;
                    if (!( this.precpred(this._ctx, 24))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 24)");
                    }
                    this.state = 138;
                    this.match(MiniParser.T__0);
                    this.state = 139;
                    this.match(MiniParser.ID);

                                          localctx.type = 'select_id'
                                      
                    break;

                case 9:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expr);
                    this.state = 141;
                    if (!( this.precpred(this._ctx, 23))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 23)");
                    }
                    this.state = 142;
                    this.match(MiniParser.T__1);
                    this.state = 143;
                    this.expr(0);
<<<<<<< refs/remotes/origin/master
<<<<<<< refs/remotes/origin/master
                    this.state = 142;
                    this.match(MiniParser.T__5);

=======
                    this.state = 146;
=======
                    this.state = 144;
>>>>>>> Working iteration of functions with partial evaluation
                    this.match(MiniParser.T__2);
                     
>>>>>>> Introduces function type
                                          localctx.type = 'select_expr'
                                      
                    break;

                case 10:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expr);
                    this.state = 147;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 148;
                    this.match(MiniParser.T__18);
                    this.state = 149;
                    this.function_call();
                     localctx.type = 'pipe' 
                    break;

                } 
            }
            this.state = 156;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function RangeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_range;
    return this;
}

RangeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RangeContext.prototype.constructor = RangeContext;

RangeContext.prototype.CELL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MiniParser.CELL);
    } else {
        return this.getToken(MiniParser.CELL, i);
    }
};


RangeContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterRange(this);
	}
};

RangeContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitRange(this);
	}
};




MiniParser.RangeContext = RangeContext;

MiniParser.prototype.range = function() {

    var localctx = new RangeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, MiniParser.RULE_range);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 157;
        this.match(MiniParser.CELL);
        this.state = 158;
        this.match(MiniParser.T__23);
        this.state = 159;
        this.match(MiniParser.CELL);
         localctx.type = '_range' 
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CellContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_cell;
    return this;
}

CellContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CellContext.prototype.constructor = CellContext;

CellContext.prototype.CELL = function() {
    return this.getToken(MiniParser.CELL, 0);
};

CellContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterCell(this);
	}
};

CellContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitCell(this);
	}
};




MiniParser.CellContext = CellContext;

MiniParser.prototype.cell = function() {

    var localctx = new CellContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, MiniParser.RULE_cell);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 161;
        this.match(MiniParser.CELL);
         localctx.type = '_cell' 
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Sheet_refContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_sheet_ref;
    return this;
}

Sheet_refContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Sheet_refContext.prototype.constructor = Sheet_refContext;

Sheet_refContext.prototype.ID = function() {
    return this.getToken(MiniParser.ID, 0);
};

Sheet_refContext.prototype.cell = function() {
    return this.getTypedRuleContext(CellContext,0);
};

Sheet_refContext.prototype.range = function() {
    return this.getTypedRuleContext(RangeContext,0);
};

Sheet_refContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterSheet_ref(this);
	}
};

Sheet_refContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitSheet_ref(this);
	}
};




MiniParser.Sheet_refContext = Sheet_refContext;

MiniParser.prototype.sheet_ref = function() {

    var localctx = new Sheet_refContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, MiniParser.RULE_sheet_ref);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 163;
        this.match(MiniParser.ID);
        this.state = 164;
        this.match(MiniParser.T__3);
        this.state = 167;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.state = 165;
            this.cell();
            break;

        case 2:
            this.state = 166;
            this.range();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Function_callContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_function_call;
    this.name = null; // Token
    this.args = null; // Call_argumentsContext
    return this;
}

Function_callContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Function_callContext.prototype.constructor = Function_callContext;

Function_callContext.prototype.ID = function() {
    return this.getToken(MiniParser.ID, 0);
};

Function_callContext.prototype.call_arguments = function() {
    return this.getTypedRuleContext(Call_argumentsContext,0);
};

Function_callContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterFunction_call(this);
	}
};

Function_callContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitFunction_call(this);
	}
};




MiniParser.Function_callContext = Function_callContext;

MiniParser.prototype.function_call = function() {

    var localctx = new Function_callContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, MiniParser.RULE_function_call);
    try {
        this.state = 178;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 169;
            localctx.name = this.match(MiniParser.ID);
            this.state = 170;
            this.match(MiniParser.T__22);
             localctx.type = 'call' 
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 172;
            localctx.name = this.match(MiniParser.ID);
            this.state = 173;
            this.match(MiniParser.T__19);
            this.state = 174;
            localctx.args = this.call_arguments();
            this.state = 175;
            this.match(MiniParser.T__20);
             localctx.type = 'call' 
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;

NumberContext.prototype.INT = function() {
    return this.getToken(MiniParser.INT, 0);
};

NumberContext.prototype.FLOAT = function() {
    return this.getToken(MiniParser.FLOAT, 0);
};

NumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterNumber(this);
	}
};

NumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitNumber(this);
	}
};




MiniParser.NumberContext = NumberContext;

MiniParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, MiniParser.RULE_number);
    try {
        this.state = 184;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case MiniParser.INT:
            this.enterOuterAlt(localctx, 1);
            this.state = 180;
            this.match(MiniParser.INT);
             localctx.type = 'int' 
            break;
        case MiniParser.FLOAT:
            this.enterOuterAlt(localctx, 2);
            this.state = 182;
            this.match(MiniParser.FLOAT);
             localctx.type = 'float' 
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArrayContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_array;
    this._value = null; // ValueContext
    this.items = []; // of ValueContexts
    return this;
}

ArrayContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayContext.prototype.constructor = ArrayContext;

ArrayContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};

ArrayContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterArray(this);
	}
};

ArrayContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitArray(this);
	}
};




MiniParser.ArrayContext = ArrayContext;

MiniParser.prototype.array = function() {

    var localctx = new ArrayContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, MiniParser.RULE_array);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 186;
        this.match(MiniParser.T__1);
        this.state = 195;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MiniParser.T__0) | (1 << MiniParser.T__1) | (1 << MiniParser.T__3) | (1 << MiniParser.T__4) | (1 << MiniParser.T__5) | (1 << MiniParser.T__19) | (1 << MiniParser.T__21) | (1 << MiniParser.T__25) | (1 << MiniParser.BOOLEAN) | (1 << MiniParser.CELL) | (1 << MiniParser.ID) | (1 << MiniParser.INT))) !== 0) || _la===MiniParser.FLOAT || _la===MiniParser.STRING) {
            this.state = 187;
            localctx._value = this.value();
            localctx.items.push(localctx._value);
            this.state = 192;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===MiniParser.T__24) {
                this.state = 188;
                this.match(MiniParser.T__24);
                this.state = 189;
                localctx._value = this.value();
                localctx.items.push(localctx._value);
                this.state = 194;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 197;
        this.match(MiniParser.T__2);
         localctx.type = 'array' 
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ObjectContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_object;
    this._ID = null; // Token
    this.keys = []; // of Tokens
    this._value = null; // ValueContext
    this.vals = []; // of ValueContexts
    return this;
}

ObjectContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjectContext.prototype.constructor = ObjectContext;

ObjectContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MiniParser.ID);
    } else {
        return this.getToken(MiniParser.ID, i);
    }
};


ObjectContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};

ObjectContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterObject(this);
	}
};

ObjectContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitObject(this);
	}
};




MiniParser.ObjectContext = ObjectContext;

MiniParser.prototype.object = function() {

    var localctx = new ObjectContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, MiniParser.RULE_object);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 200;
        this.match(MiniParser.T__25);
        this.state = 213;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===MiniParser.ID) {
            this.state = 201;
            localctx._ID = this.match(MiniParser.ID);
            localctx.keys.push(localctx._ID);
            this.state = 202;
            this.match(MiniParser.T__23);
            this.state = 203;
            localctx._value = this.value();
            localctx.vals.push(localctx._value);
            this.state = 210;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===MiniParser.T__24) {
                this.state = 204;
                this.match(MiniParser.T__24);
                this.state = 205;
                localctx._ID = this.match(MiniParser.ID);
                localctx.keys.push(localctx._ID);
                this.state = 206;
                this.match(MiniParser.T__23);
                this.state = 207;
                localctx._value = this.value();
                localctx.vals.push(localctx._value);
                this.state = 212;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 215;
        this.match(MiniParser.T__26);
         localctx.type = 'object' 
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Id_seqContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_id_seq;
    this._ID = null; // Token
    this.items = []; // of Tokens
    return this;
}

Id_seqContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Id_seqContext.prototype.constructor = Id_seqContext;

Id_seqContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MiniParser.ID);
    } else {
        return this.getToken(MiniParser.ID, i);
    }
};


Id_seqContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterId_seq(this);
	}
};

Id_seqContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitId_seq(this);
	}
};




MiniParser.Id_seqContext = Id_seqContext;

MiniParser.prototype.id_seq = function() {

    var localctx = new Id_seqContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, MiniParser.RULE_id_seq);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 218;
        localctx._ID = this.match(MiniParser.ID);
        localctx.items.push(localctx._ID);
        this.state = 223;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MiniParser.T__24) {
            this.state = 219;
            this.match(MiniParser.T__24);
            this.state = 220;
            localctx._ID = this.match(MiniParser.ID);
            localctx.items.push(localctx._ID);
            this.state = 225;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Call_argumentsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_call_arguments;
    this.args = null; // Positional_argumentsContext
    this.namedArgs = null; // Named_argumentsContext
    return this;
}

Call_argumentsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Call_argumentsContext.prototype.constructor = Call_argumentsContext;

Call_argumentsContext.prototype.positional_arguments = function() {
    return this.getTypedRuleContext(Positional_argumentsContext,0);
};

Call_argumentsContext.prototype.named_arguments = function() {
    return this.getTypedRuleContext(Named_argumentsContext,0);
};

Call_argumentsContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterCall_arguments(this);
	}
};

Call_argumentsContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitCall_arguments(this);
	}
};




MiniParser.Call_argumentsContext = Call_argumentsContext;

MiniParser.prototype.call_arguments = function() {

    var localctx = new Call_argumentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, MiniParser.RULE_call_arguments);
    try {
        this.state = 233;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 227;
            localctx.args = this.positional_arguments();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 228;
            localctx.namedArgs = this.named_arguments();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 229;
            localctx.args = this.positional_arguments();
            this.state = 230;
            this.match(MiniParser.T__24);
            this.state = 231;
            localctx.namedArgs = this.named_arguments();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Positional_argumentsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_positional_arguments;
    return this;
}

Positional_argumentsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Positional_argumentsContext.prototype.constructor = Positional_argumentsContext;

Positional_argumentsContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};

Positional_argumentsContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterPositional_arguments(this);
	}
};

Positional_argumentsContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitPositional_arguments(this);
	}
};




MiniParser.Positional_argumentsContext = Positional_argumentsContext;

MiniParser.prototype.positional_arguments = function() {

    var localctx = new Positional_argumentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, MiniParser.RULE_positional_arguments);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 235;
        this.value();
        this.state = 242;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 236;
                this.match(MiniParser.T__24);
                this.state = 238;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MiniParser.T__0) | (1 << MiniParser.T__1) | (1 << MiniParser.T__3) | (1 << MiniParser.T__4) | (1 << MiniParser.T__5) | (1 << MiniParser.T__19) | (1 << MiniParser.T__21) | (1 << MiniParser.T__25) | (1 << MiniParser.BOOLEAN) | (1 << MiniParser.CELL) | (1 << MiniParser.ID) | (1 << MiniParser.INT))) !== 0) || _la===MiniParser.FLOAT || _la===MiniParser.STRING) {
                    this.state = 237;
                    this.value();
                }
         
            }
            this.state = 244;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Named_argumentsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_named_arguments;
    return this;
}

Named_argumentsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Named_argumentsContext.prototype.constructor = Named_argumentsContext;

Named_argumentsContext.prototype.named_argument = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Named_argumentContext);
    } else {
        return this.getTypedRuleContext(Named_argumentContext,i);
    }
};

Named_argumentsContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterNamed_arguments(this);
	}
};

Named_argumentsContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitNamed_arguments(this);
	}
};




MiniParser.Named_argumentsContext = Named_argumentsContext;

MiniParser.prototype.named_arguments = function() {

    var localctx = new Named_argumentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, MiniParser.RULE_named_arguments);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 245;
        this.named_argument();
        this.state = 252;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MiniParser.T__24) {
            this.state = 246;
            this.match(MiniParser.T__24);
            this.state = 248;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===MiniParser.ID) {
                this.state = 247;
                this.named_argument();
            }

            this.state = 254;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Named_argumentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_named_argument;
    return this;
}

Named_argumentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Named_argumentContext.prototype.constructor = Named_argumentContext;

Named_argumentContext.prototype.ID = function() {
    return this.getToken(MiniParser.ID, 0);
};

Named_argumentContext.prototype.EQ = function() {
    return this.getToken(MiniParser.EQ, 0);
};

Named_argumentContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

Named_argumentContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterNamed_argument(this);
	}
};

Named_argumentContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitNamed_argument(this);
	}
};




MiniParser.Named_argumentContext = Named_argumentContext;

MiniParser.prototype.named_argument = function() {

    var localctx = new Named_argumentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, MiniParser.RULE_named_argument);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 255;
        this.match(MiniParser.ID);
        this.state = 256;
        this.match(MiniParser.EQ);
        this.state = 257;
        this.value();
         localctx.type = 'named-argument' 
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


MiniParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 2:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

MiniParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this._input.LA(1) !== MiniParser.EQ;
		case 1:
			return this.precpred(this._ctx, 21);
		case 2:
			return this.precpred(this._ctx, 20);
		case 3:
			return this.precpred(this._ctx, 19);
		case 4:
			return this.precpred(this._ctx, 18);
		case 5:
			return this.precpred(this._ctx, 17);
		case 6:
			return this.precpred(this._ctx, 16);
		case 7:
			return this.precpred(this._ctx, 15);
		case 8:
			return this.precpred(this._ctx, 24);
		case 9:
			return this.precpred(this._ctx, 23);
		case 10:
			return this.precpred(this._ctx, 14);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.MiniParser = MiniParser;
