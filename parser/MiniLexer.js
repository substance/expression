// Generated from parser/Mini.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\"\u00cd\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b",
    "\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015",
    "\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018",
    "\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0005\u001a",
    "\u008a\n\u001a\u0003\u001b\u0006\u001b\u008d\n\u001b\r\u001b\u000e\u001b",
    "\u008e\u0003\u001b\u0003\u001b\u0007\u001b\u0093\n\u001b\f\u001b\u000e",
    "\u001b\u0096\u000b\u001b\u0003\u001c\u0003\u001c\u0007\u001c\u009a\n",
    "\u001c\f\u001c\u000e\u001c\u009d\u000b\u001c\u0003\u001d\u0006\u001d",
    "\u00a0\n\u001d\r\u001d\u000e\u001d\u00a1\u0003\u001e\u0006\u001e\u00a5",
    "\n\u001e\r\u001e\u000e\u001e\u00a6\u0003\u001e\u0003\u001e\u0006\u001e",
    "\u00ab\n\u001e\r\u001e\u000e\u001e\u00ac\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0007\u001f\u00b3\n\u001f\f\u001f\u000e\u001f\u00b6",
    "\u000b\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0007\u001f\u00bd\n\u001f\f\u001f\u000e\u001f\u00c0\u000b\u001f\u0003",
    "\u001f\u0005\u001f\u00c3\n\u001f\u0003 \u0003 \u0003!\u0006!\u00c8\n",
    "!\r!\u000e!\u00c9\u0003!\u0003!\u0004\u00b4\u00be\u0002\"\u0003\u0003",
    "\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013",
    "\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011",
    "!\u0012#\u0013%\u0014\'\u0015)\u0016+\u0017-\u0018/\u00191\u001a3\u001b",
    "5\u001c7\u001d9\u001e;\u001f= ?!A\"\u0003\u0002\t\u0003\u0002C\\\u0003",
    "\u00023;\u0003\u00022;\u0005\u0002B\\aac|\u0006\u00022;B\\aac|\u0003",
    "\u0002))\u0005\u0002\u000b\f\u000f\u000f\"\"\u00d9\u0002\u0003\u0003",
    "\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003",
    "\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003",
    "\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003",
    "\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003",
    "\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003",
    "\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003",
    "\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003",
    "\u0002\u0002\u0002\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003\u0002",
    "\u0002\u0002\u0002%\u0003\u0002\u0002\u0002\u0002\'\u0003\u0002\u0002",
    "\u0002\u0002)\u0003\u0002\u0002\u0002\u0002+\u0003\u0002\u0002\u0002",
    "\u0002-\u0003\u0002\u0002\u0002\u0002/\u0003\u0002\u0002\u0002\u0002",
    "1\u0003\u0002\u0002\u0002\u00023\u0003\u0002\u0002\u0002\u00025\u0003",
    "\u0002\u0002\u0002\u00027\u0003\u0002\u0002\u0002\u00029\u0003\u0002",
    "\u0002\u0002\u0002;\u0003\u0002\u0002\u0002\u0002=\u0003\u0002\u0002",
    "\u0002\u0002?\u0003\u0002\u0002\u0002\u0002A\u0003\u0002\u0002\u0002",
    "\u0003C\u0003\u0002\u0002\u0002\u0005L\u0003\u0002\u0002\u0002\u0007",
    "N\u0003\u0002\u0002\u0002\tP\u0003\u0002\u0002\u0002\u000bR\u0003\u0002",
    "\u0002\u0002\rT\u0003\u0002\u0002\u0002\u000fV\u0003\u0002\u0002\u0002",
    "\u0011X\u0003\u0002\u0002\u0002\u0013Z\u0003\u0002\u0002\u0002\u0015",
    "\\\u0003\u0002\u0002\u0002\u0017^\u0003\u0002\u0002\u0002\u0019a\u0003",
    "\u0002\u0002\u0002\u001bc\u0003\u0002\u0002\u0002\u001df\u0003\u0002",
    "\u0002\u0002\u001fi\u0003\u0002\u0002\u0002!l\u0003\u0002\u0002\u0002",
    "#o\u0003\u0002\u0002\u0002%r\u0003\u0002\u0002\u0002\'t\u0003\u0002",
    "\u0002\u0002)v\u0003\u0002\u0002\u0002+x\u0003\u0002\u0002\u0002-z\u0003",
    "\u0002\u0002\u0002/|\u0003\u0002\u0002\u00021~\u0003\u0002\u0002\u0002",
    "3\u0089\u0003\u0002\u0002\u00025\u008c\u0003\u0002\u0002\u00027\u0097",
    "\u0003\u0002\u0002\u00029\u009f\u0003\u0002\u0002\u0002;\u00a4\u0003",
    "\u0002\u0002\u0002=\u00c2\u0003\u0002\u0002\u0002?\u00c4\u0003\u0002",
    "\u0002\u0002A\u00c7\u0003\u0002\u0002\u0002CD\u0007h\u0002\u0002DE\u0007",
    "w\u0002\u0002EF\u0007p\u0002\u0002FG\u0007e\u0002\u0002GH\u0007v\u0002",
    "\u0002HI\u0007k\u0002\u0002IJ\u0007q\u0002\u0002JK\u0007p\u0002\u0002",
    "K\u0004\u0003\u0002\u0002\u0002LM\u0007*\u0002\u0002M\u0006\u0003\u0002",
    "\u0002\u0002NO\u0007+\u0002\u0002O\b\u0003\u0002\u0002\u0002PQ\u0007",
    "#\u0002\u0002Q\n\u0003\u0002\u0002\u0002RS\u0007-\u0002\u0002S\f\u0003",
    "\u0002\u0002\u0002TU\u0007/\u0002\u0002U\u000e\u0003\u0002\u0002\u0002",
    "VW\u0007`\u0002\u0002W\u0010\u0003\u0002\u0002\u0002XY\u0007,\u0002",
    "\u0002Y\u0012\u0003\u0002\u0002\u0002Z[\u00071\u0002\u0002[\u0014\u0003",
    "\u0002\u0002\u0002\\]\u0007>\u0002\u0002]\u0016\u0003\u0002\u0002\u0002",
    "^_\u0007>\u0002\u0002_`\u0007?\u0002\u0002`\u0018\u0003\u0002\u0002",
    "\u0002ab\u0007@\u0002\u0002b\u001a\u0003\u0002\u0002\u0002cd\u0007@",
    "\u0002\u0002de\u0007?\u0002\u0002e\u001c\u0003\u0002\u0002\u0002fg\u0007",
    "?\u0002\u0002gh\u0007?\u0002\u0002h\u001e\u0003\u0002\u0002\u0002ij",
    "\u0007#\u0002\u0002jk\u0007?\u0002\u0002k \u0003\u0002\u0002\u0002l",
    "m\u0007(\u0002\u0002mn\u0007(\u0002\u0002n\"\u0003\u0002\u0002\u0002",
    "op\u0007~\u0002\u0002pq\u0007~\u0002\u0002q$\u0003\u0002\u0002\u0002",
    "rs\u0007~\u0002\u0002s&\u0003\u0002\u0002\u0002tu\u0007<\u0002\u0002",
    "u(\u0003\u0002\u0002\u0002vw\u0007.\u0002\u0002w*\u0003\u0002\u0002",
    "\u0002xy\u0007]\u0002\u0002y,\u0003\u0002\u0002\u0002z{\u0007_\u0002",
    "\u0002{.\u0003\u0002\u0002\u0002|}\u0007}\u0002\u0002}0\u0003\u0002",
    "\u0002\u0002~\u007f\u0007\u007f\u0002\u0002\u007f2\u0003\u0002\u0002",
    "\u0002\u0080\u0081\u0007v\u0002\u0002\u0081\u0082\u0007t\u0002\u0002",
    "\u0082\u0083\u0007w\u0002\u0002\u0083\u008a\u0007g\u0002\u0002\u0084",
    "\u0085\u0007h\u0002\u0002\u0085\u0086\u0007c\u0002\u0002\u0086\u0087",
    "\u0007n\u0002\u0002\u0087\u0088\u0007u\u0002\u0002\u0088\u008a\u0007",
    "g\u0002\u0002\u0089\u0080\u0003\u0002\u0002\u0002\u0089\u0084\u0003",
    "\u0002\u0002\u0002\u008a4\u0003\u0002\u0002\u0002\u008b\u008d\t\u0002",
    "\u0002\u0002\u008c\u008b\u0003\u0002\u0002\u0002\u008d\u008e\u0003\u0002",
    "\u0002\u0002\u008e\u008c\u0003\u0002\u0002\u0002\u008e\u008f\u0003\u0002",
    "\u0002\u0002\u008f\u0090\u0003\u0002\u0002\u0002\u0090\u0094\t\u0003",
    "\u0002\u0002\u0091\u0093\t\u0004\u0002\u0002\u0092\u0091\u0003\u0002",
    "\u0002\u0002\u0093\u0096\u0003\u0002\u0002\u0002\u0094\u0092\u0003\u0002",
    "\u0002\u0002\u0094\u0095\u0003\u0002\u0002\u0002\u00956\u0003\u0002",
    "\u0002\u0002\u0096\u0094\u0003\u0002\u0002\u0002\u0097\u009b\t\u0005",
    "\u0002\u0002\u0098\u009a\t\u0006\u0002\u0002\u0099\u0098\u0003\u0002",
    "\u0002\u0002\u009a\u009d\u0003\u0002\u0002\u0002\u009b\u0099\u0003\u0002",
    "\u0002\u0002\u009b\u009c\u0003\u0002\u0002\u0002\u009c8\u0003\u0002",
    "\u0002\u0002\u009d\u009b\u0003\u0002\u0002\u0002\u009e\u00a0\t\u0004",
    "\u0002\u0002\u009f\u009e\u0003\u0002\u0002\u0002\u00a0\u00a1\u0003\u0002",
    "\u0002\u0002\u00a1\u009f\u0003\u0002\u0002\u0002\u00a1\u00a2\u0003\u0002",
    "\u0002\u0002\u00a2:\u0003\u0002\u0002\u0002\u00a3\u00a5\t\u0004\u0002",
    "\u0002\u00a4\u00a3\u0003\u0002\u0002\u0002\u00a5\u00a6\u0003\u0002\u0002",
    "\u0002\u00a6\u00a4\u0003\u0002\u0002\u0002\u00a6\u00a7\u0003\u0002\u0002",
    "\u0002\u00a7\u00a8\u0003\u0002\u0002\u0002\u00a8\u00aa\u00070\u0002",
    "\u0002\u00a9\u00ab\t\u0004\u0002\u0002\u00aa\u00a9\u0003\u0002\u0002",
    "\u0002\u00ab\u00ac\u0003\u0002\u0002\u0002\u00ac\u00aa\u0003\u0002\u0002",
    "\u0002\u00ac\u00ad\u0003\u0002\u0002\u0002\u00ad<\u0003\u0002\u0002",
    "\u0002\u00ae\u00b4\u0007$\u0002\u0002\u00af\u00b0\u0007^\u0002\u0002",
    "\u00b0\u00b3\u0007$\u0002\u0002\u00b1\u00b3\u000b\u0002\u0002\u0002",
    "\u00b2\u00af\u0003\u0002\u0002\u0002\u00b2\u00b1\u0003\u0002\u0002\u0002",
    "\u00b3\u00b6\u0003\u0002\u0002\u0002\u00b4\u00b5\u0003\u0002\u0002\u0002",
    "\u00b4\u00b2\u0003\u0002\u0002\u0002\u00b5\u00b7\u0003\u0002\u0002\u0002",
    "\u00b6\u00b4\u0003\u0002\u0002\u0002\u00b7\u00c3\u0007$\u0002\u0002",
    "\u00b8\u00be\t\u0007\u0002\u0002\u00b9\u00ba\u0007^\u0002\u0002\u00ba",
    "\u00bd\t\u0007\u0002\u0002\u00bb\u00bd\u000b\u0002\u0002\u0002\u00bc",
    "\u00b9\u0003\u0002\u0002\u0002\u00bc\u00bb\u0003\u0002\u0002\u0002\u00bd",
    "\u00c0\u0003\u0002\u0002\u0002\u00be\u00bf\u0003\u0002\u0002\u0002\u00be",
    "\u00bc\u0003\u0002\u0002\u0002\u00bf\u00c1\u0003\u0002\u0002\u0002\u00c0",
    "\u00be\u0003\u0002\u0002\u0002\u00c1\u00c3\t\u0007\u0002\u0002\u00c2",
    "\u00ae\u0003\u0002\u0002\u0002\u00c2\u00b8\u0003\u0002\u0002\u0002\u00c3",
    ">\u0003\u0002\u0002\u0002\u00c4\u00c5\u0007?\u0002\u0002\u00c5@\u0003",
    "\u0002\u0002\u0002\u00c6\u00c8\t\b\u0002\u0002\u00c7\u00c6\u0003\u0002",
    "\u0002\u0002\u00c8\u00c9\u0003\u0002\u0002\u0002\u00c9\u00c7\u0003\u0002",
    "\u0002\u0002\u00c9\u00ca\u0003\u0002\u0002\u0002\u00ca\u00cb\u0003\u0002",
    "\u0002\u0002\u00cb\u00cc\b!\u0002\u0002\u00ccB\u0003\u0002\u0002\u0002",
    "\u0010\u0002\u0089\u008e\u0094\u009b\u00a1\u00a6\u00ac\u00b2\u00b4\u00bc",
    "\u00be\u00c2\u00c9\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function MiniLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

MiniLexer.prototype = Object.create(antlr4.Lexer.prototype);
MiniLexer.prototype.constructor = MiniLexer;

MiniLexer.EOF = antlr4.Token.EOF;
MiniLexer.T__0 = 1;
MiniLexer.T__1 = 2;
MiniLexer.T__2 = 3;
MiniLexer.T__3 = 4;
MiniLexer.T__4 = 5;
MiniLexer.T__5 = 6;
MiniLexer.T__6 = 7;
MiniLexer.T__7 = 8;
MiniLexer.T__8 = 9;
MiniLexer.T__9 = 10;
MiniLexer.T__10 = 11;
MiniLexer.T__11 = 12;
MiniLexer.T__12 = 13;
MiniLexer.T__13 = 14;
MiniLexer.T__14 = 15;
MiniLexer.T__15 = 16;
MiniLexer.T__16 = 17;
MiniLexer.T__17 = 18;
MiniLexer.T__18 = 19;
MiniLexer.T__19 = 20;
MiniLexer.T__20 = 21;
MiniLexer.T__21 = 22;
MiniLexer.T__22 = 23;
MiniLexer.T__23 = 24;
MiniLexer.BOOLEAN = 25;
MiniLexer.CELL = 26;
MiniLexer.ID = 27;
MiniLexer.INT = 28;
MiniLexer.FLOAT = 29;
MiniLexer.STRING = 30;
MiniLexer.EQ = 31;
MiniLexer.WS = 32;


MiniLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

MiniLexer.prototype.literalNames = [ null, "'function'", "'('", "')'", "'!'", 
                                     "'+'", "'-'", "'^'", "'*'", "'/'", 
                                     "'<'", "'<='", "'>'", "'>='", "'=='", 
                                     "'!='", "'&&'", "'||'", "'|'", "':'", 
                                     "','", "'['", "']'", "'{'", "'}'", 
                                     null, null, null, null, null, null, 
                                     "'='" ];

MiniLexer.prototype.symbolicNames = [ null, null, null, null, null, null, 
                                      null, null, null, null, null, null, 
                                      null, null, null, null, null, null, 
                                      null, null, null, null, null, null, 
                                      null, "BOOLEAN", "CELL", "ID", "INT", 
                                      "FLOAT", "STRING", "EQ", "WS" ];

MiniLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                  "T__5", "T__6", "T__7", "T__8", "T__9", 
                                  "T__10", "T__11", "T__12", "T__13", "T__14", 
                                  "T__15", "T__16", "T__17", "T__18", "T__19", 
                                  "T__20", "T__21", "T__22", "T__23", "BOOLEAN", 
                                  "CELL", "ID", "INT", "FLOAT", "STRING", 
                                  "EQ", "WS" ];

MiniLexer.prototype.grammarFileName = "Mini.g4";



exports.MiniLexer = MiniLexer;

