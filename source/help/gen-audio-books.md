title: 制作有声书
---
在开始制作之前，请执行以下操作：
* **将 ePub 格式的书籍及对应音频下载到本地**。当前，我们仅支持 ePub 格式有声书的导入，所以请确保您要制作的书籍为 ePub 格式。
* **下载 [Sigil](https://github.com/Sigil-Ebook/Sigil/releases/tag/0.9.16) 并安装**。此工具支持Windows和Mac操作系统，请根据您的系统类型选择相应的下载链接。
* **下载 [ePub3-itizer](https://www.mobileread.com/forums/attachment.php?attachmentid=167654&d=1542042338) 插件并加入 Sigil**。插件下载后，打开 Sigil，选择菜单上的 Plugins -> Manage Plugins，然后选择面板上的 Add Plugin，将下载的插件添加到 Sigil 中。

{% note info 格式转换 %}
如果您有其他格式的书籍，比如mobi/azw等，您可下载免费软件 [Calibre](https://calibre-ebook.com/) 将书籍转换为 epub 格式。Calibre 支持以下格式书籍： AZW, AZW3, AZW4, CBZ, CBR, CBC, CHM, DJVU, DOCX, EPUB, FB2, FBZ, HTML, HTMLZ, LIT, LRF, MOBI, ODT, PDF, PRC, PDB, PML, RB, RTF, SNB, TCR, TXT, TXTZ。
{% endnote %}

{% note info 工具下载 %}
上述工具还可在以下百度网盘链接下载。
链接: https://pan.baidu.com/s/1a_rWK1Upe6NiEq6UZpPrBw 提取码: 6epv 
{% endnote %}


上述操作完成后，您可按以下步骤制作有声书：
1. 打开Sigil，选择 File -> Open... 打开 ePub 书籍。查看左边 Book Brower 面板，点按 Text 部分，将 Text 部分未出现在音频中的文件删除，一般为最前面和最后面的文件。
2. 将音频文件切割成和 Text 部分包含的文本文件一一对应的音频文件，并将切割后的音频文件的名字改成其对应文本文件的名字。因为听阅是根据文件名来查找文本对应的音频，所以请确保音频和文本间的映射关系。音频切割工具可使用 [Audacity](https://www.audacityteam.org/)。
3. 右键点击 Book Brower 面板上的 Audio 一行，选择 Add Existing Files...，将切割好的音频文件加入书中。
4. 选择菜单上的 Plugins -> Output -> ePub3-itizer，将书籍导出为 ePub3 格式的有声书。

导出书籍后，打开听阅 App，并按照[导入书籍](book-imports.html)将书籍导入听阅阅读。

若您有包含书中文本时间戳的 srt/smil/ass/lrc 格式的字幕文件，也可将这些文件加入书中并导出。听阅可读取这些格式的字幕，并将导入的书籍制作成点读版。

使用过程中，若有任何问题，请联系微信eareyereading。