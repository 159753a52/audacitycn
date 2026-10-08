export interface GuideSection { title: string; paragraphs?: string[]; steps?: string[]; table?: { headers: string[]; rows: string[][] }; code?: string; note?: string; links?: string[][]; }
export interface Guide { slug: string; title: string; short: string; category: string; intro: string; applies: string; updated: string; answer: string; related: string[]; sections: GuideSection[]; tip?: string; sources: string[][]; }
export const guides: Guide[] = [
  {
    slug: 'getting-started',
    title: 'Audacity 怎么用：新手入门，从录音、剪辑到导出 MP3',
    short: '新手入门：第一次用',
    category: '入门',
    intro: '按官方 4.x 入门顺序走一遍：建轨道、录音、看波形、剪辑、加效果、保存工程和导出音频，每一步都附详细教程。',
    applies: 'Audacity 4.x',
    updated: '2026-10-07',
    answer: '点 Add track 新建 Mono 轨道，选中轨道后按 R 录音、空格停止；拖选口误按 Delete 删除；在轨道的 Effects 里加实时效果；Ctrl + S 保存 .aup4 工程；最后用 File → Export audio（Ctrl + Shift + E）导出 MP3 或 WAV。',
    related: ['record-voice', 'edit-audio', 'export-audio'],
    sections: [
      {
        "title": "4.0.1 中文菜单对照",
        "paragraphs": [
          "教程中的英文菜单可按下表在简体中文界面查找。这里只核对菜单名称；操作顺序和适用条件见后文。"
        ],
        "table": {
          "headers": [
            "教程中的英文",
            "简体中文界面"
          ],
          "rows": [
            [
              "Add track",
              "添加音轨"
            ],
            [
              "Mono",
              "单声道"
            ],
            [
              "Record",
              "录制"
            ],
            [
              "Effects",
              "效果器"
            ],
            [
              "Save to computer",
              "保存到计算机"
            ],
            [
              "Export audio",
              "导出音频"
            ]
          ]
        },
        "note": "核对版本：Audacity 4.0.1 Windows x64。名称取自官方便携包自带的 locale/audacity_zh_CN.qm（2026-10-07 核对），省略快捷键字母和省略号。更新语言包后译名可能变化；此表不用于判断 3.x 的菜单名称。",
        "links": [
          [
            "官方 4.0.1 发布记录",
            "https://github.com/audacity/audacity/releases/tag/Audacity-4.0.1"
          ]
        ]
      },
      {
        title: '一次完整流程',
        table: { headers: ['步骤', '怎么做', '细看'], rows: [
          ['1. 建轨道', 'Add track → Mono；一支麦克风录人声用单声道', '麦克风录音设置'],
          ['2. 录音', '选中轨道，按 Record 或 R；空格停止', '麦克风录音设置'],
          ['3. 剪辑', '拖选要去掉的部分，按 Delete', '剪切、分割与拼接'],
          ['4. 处理', '降噪、压缩或均衡', '背景底噪处理'],
          ['5. 保存', 'Ctrl + S，得到可继续修改的 .aup4 工程', '导出 MP3 和 WAV'],
          ['6. 导出', 'File → Export audio，选 MP3、WAV 等格式', '导出 MP3 和 WAV'],
        ] },
      },
      {
        title: '录第一段声音',
        paragraphs: ['录下的声音放在“片段”（clip）里，片段放在轨道上。先建好轨道再录，后面剪辑会顺手很多。'],
        steps: [
          '点轨道区上方的 Add track，选择 Mono。一支麦克风只有一个声道，录人声用 Mono；音乐或本来就是立体声的来源用 Stereo。',
          '点一下轨道左侧的轨道头，选中这条轨道。录音会进入选中的轨道；一条轨道都没有时，按录音会自动新建。',
          '对着麦克风正常说话，看轨道头上的电平表：说话时的峰值落在 −18 dB 到 −6 dB 之间比较合适。',
          '点红色的 Record 按钮或按 R 开始录音；按 Pause 暂停，再按一次会接着录在同一个片段里。',
          '按 Stop 或空格结束，再按空格从播放头位置回放。',
        ],
        note: '每次开录前先录几秒安静的房间声，既方便剪掉开头，也能留作降噪时的噪声样本。',
        links: [['麦克风录音设置', '/guides/record-voice/'], ['录电脑内部声音', '/guides/record-desktop/']],
      },
      {
        title: '看波形判断录得好不好',
        table: { headers: ['波形样子', '说明', '怎么办'], rows: [
          ['波峰被削平，伴随削波提示', '音量过大，波峰被削平（削波）', '调低输入音量后重录最稳妥，降低回放音量不能恢复丢失的波峰；View → Show clipping in waveform 会把削波处标红'],
          ['几乎是一条直线', '可能音量太小，也可能没有录到输入', '调高输入或靠近麦克风后重录；没法重录时可用 Amplify 放大，但底噪会一起变大'],
          ['起伏清楚，峰值离顶部还有距离', '音量合适', '可以开始剪辑'],
        ] },
        links: [['录音没声音怎么办', '/guides/no-sound/']],
      },
      {
        title: '基础剪辑：删、留、静音',
        paragraphs: ['在波形上按住拖动，就是选中一段时间范围；按住 Shift 再点击可以延长选区，Ctrl + A 全选。按住 Ctrl 滚动滚轮能以指针为中心缩放，方便把选区边缘放准。动手前先按播放，听一下选中的范围对不对。'],
        table: { headers: ['想做的事', '操作', '结果'], rows: [
          ['删掉口误', '选中后按 Delete', '第一次删除会询问：留下空白（Leave a gap），或让后面的内容前移补上（Close gap）'],
          ['只留选中的部分', 'Trim clip（Ctrl + T）', '去掉片段里选区以外的内容，适合一次切掉头尾的空白'],
          ['把咳嗽变成静音', 'Silence audio（Ctrl + L）', '选区变成无声，时长不变，后面的节奏不受影响'],
          ['在某处切开', '按 S 打开分割工具后点击，或放好光标按 Ctrl + I', '一个片段变成两个，可以分别移动或删除'],
        ] },
        note: 'Shift + Delete 只在当前轨道删除并合拢空隙；Ctrl + Delete 在所有轨道上一起删除并合拢，多条轨道保持对齐。',
        links: [['剪切、分割与拼接', '/guides/edit-audio/']],
      },
      {
        title: '加效果：直接改写，还是随时可调',
        paragraphs: ['实时效果按从上到下的顺序处理。点效果旁边的电源按钮可以临时关闭，对比处理前后的声音；要彻底去掉，在效果名旁的三角菜单里选 No effect。'],
        table: { headers: ['方式', '怎么加', '特点'], rows: [
          ['Effect 菜单', '先选中一段，再从 Effect 菜单选效果', '直接改写音频；工程打开期间可以撤销，关闭工程后就成为音频的一部分'],
          ['实时效果', '点轨道头上的 Effects（快捷键 E），在面板里 Add effect', '不改原始录音，播放时计算，可以随时调整、关闭或删除；作用于整条轨道'],
          ['Master effects', '实时效果面板底部', '作用于所有轨道混合后的整体声音'],
        ] },
        links: [['背景底噪处理', '/guides/noise-reduction/']],
      },
      {
        title: '保存工程，再导出成音频',
        steps: [
          '开始录音后尽早按 Ctrl + S。第一次保存选择 Save to computer，填写名称和位置，得到 .aup4 工程文件；之后再按 Ctrl + S 都存到同一个文件。',
          '.aup4 只能用 Audacity 打开，里面保留轨道、片段、剪辑和实时效果，以后还能接着改。保存过的工程会出现在 Home 页，方便再次打开。',
          '要发给别人或上传，用 File → Export audio（Ctrl + Shift + E）。Type 选 Export full project audio 导出整个工程，也可以只导出选区或循环区域。',
          '没有特别要求时选 MP3：人声 128 kbps、音乐 256 kbps 是稳妥的起点。单支麦克风的人声通常按单声道导出即可。MP3 文件大小主要由码率和时长决定；固定码率相同时，选立体声不会直接让文件翻倍。',
        ],
        note: 'Save to cloud 会把工程存到 audio.com，需要账号和网络；只想存在自己电脑上时选 Save to computer。',
        links: [['导出 MP3 和 WAV', '/guides/export-audio/']],
      },
    ],
    tip: '本页按 Audacity 4.x 官方入门手册整理。3.x 的菜单和快捷键有差异，例如 3.x 的工程是 .aup3，分割方式也不同；遇到对不上的地方，先确认软件版本。',
    sources: [
      ['官方 4.x 入门总览', 'https://www.audacityteam.org/manual/getting-started/'],
      ['官方：录第一段声音', 'https://www.audacityteam.org/manual/getting-started/make-your-first-recording'],
      ['官方：基础剪辑', 'https://www.audacityteam.org/manual/getting-started/basic-audio-editing'],
      ['官方：添加第一个效果', 'https://www.audacityteam.org/manual/getting-started/apply-your-first-effect'],
      ['官方：保存工程', 'https://www.audacityteam.org/manual/getting-started/save-your-project'],
      ['官方：导出音频', 'https://www.audacityteam.org/manual/getting-started/export-your-audio'],
    ],
  },
  {
    slug: 'chinese-language',
    title: 'Audacity 怎么设置中文：4.x 和 3.x 的语言选项位置',
    short: '设置中文界面',
    category: '设置',
    intro: 'Audacity 自带简体中文界面，不需要另找汉化包。4.x 在偏好设置的 General 页切换语言，3.x 在 Interface 页；菜单看不懂时也能按位置找到。',
    applies: 'Audacity 4.x / 3.x · Windows、macOS、Linux',
    updated: '2026-10-07',
    answer: 'Windows、Linux 打开 Edit → Preferences，macOS 从左上角的应用菜单打开偏好设置。4.x 在 General 页的 Language 选简体中文；3.x 在 Interface 页的 Language 选简体中文后点 OK，个别文字要重启后才切换。',
    related: ['getting-started', 'install', 'record-voice'],
    sections: [
      {
        "title": "4.0.1 中文菜单对照",
        "paragraphs": [
          "教程中的英文菜单可按下表在简体中文界面查找。这里只核对菜单名称；操作顺序和适用条件见后文。"
        ],
        "table": {
          "headers": [
            "教程中的英文",
            "简体中文界面"
          ],
          "rows": [
            [
              "Edit",
              "编辑"
            ],
            [
              "Preferences",
              "首选项"
            ],
            [
              "General",
              "通用"
            ],
            [
              "Language",
              "语言"
            ]
          ]
        },
        "note": "核对版本：Audacity 4.0.1 Windows x64。名称取自官方便携包自带的 locale/audacity_zh_CN.qm（2026-10-07 核对），省略快捷键字母和省略号。更新语言包后译名可能变化；此表不用于判断 3.x 的菜单名称。",
        "links": [
          [
            "官方 4.0.1 发布记录",
            "https://github.com/audacity/audacity/releases/tag/Audacity-4.0.1"
          ]
        ]
      },
      {
        title: '两个版本的位置对照',
        table: { headers: ['版本', '打开偏好设置', '语言选项', '切换后'], rows: [
          ['Audacity 4.x', 'Edit → Preferences；macOS 在应用菜单里', 'General 页 → Language', '同一页可以更新当前语言包'],
          ['Audacity 3.x', 'Edit → Preferences（Ctrl + P）；macOS 在 Audacity 菜单（⌘ + ,）', 'Interface 页 → Language', '点 OK 后大部分界面立即切换，少数文字重启后切换'],
        ] },
      },
      {
        title: '4.x：在 General 页切换',
        steps: [
          '打开 Edit 菜单，选择 Preferences；macOS 从屏幕左上角的应用菜单打开。',
          '在左侧列表选择 General。这一页放着界面语言、数字格式、自动更新、临时文件和 FFmpeg 等设置。',
          '在 Language 中选择简体中文；同一页还可以更新当前语言包。',
          '如果还有文字没变成中文，关闭 Audacity 再重新打开看看。',
        ],
        note: '4.x 的偏好设置里没有 Interface 页。网上 3.x 的截图和教程，在 4.x 里对不上位置。',
      },
      {
        title: '3.x：在 Interface 页切换',
        paragraphs: ['3.x 默认跟随操作系统的语言。只想改 Audacity 的语言，在它自己的偏好设置里修改即可，不影响系统设置。'],
        steps: [
          '按 Ctrl + P（macOS 按 ⌘ + ,）打开 Preferences，也可以从菜单进入。',
          '在左侧选择 Interface。',
          '在 Language 下拉框中选择简体中文，点 OK。',
          '大部分菜单会立即变成中文；剩下的少数文字，重启 Audacity 后切换。',
        ],
      },
      {
        title: '菜单是看不懂的文字时（3.x）',
        paragraphs: ['界面变成不认识的语言，或者显示成问号时，可以只按位置操作：'],
        steps: [
          '点顶部菜单栏左起第二个菜单（macOS 点左起第一个）。',
          '点这个菜单的最后一项（macOS 点第二项），打开偏好设置。',
          '在左侧列表中选择从上往下第五项。',
          '打开右侧第二个下拉框，选中简体中文后按回车。',
          '重启 Audacity，让所有文字完成切换。',
        ],
        note: '这组位置来自 3.x 官方手册，只适用于 3.x；4.x 请按上面的 General 页操作。',
      },
      {
        title: '语言列表里只有 English 或 System',
        paragraphs: ['按 3.x 官方手册，这时要检查语言文件夹是否还在原来的位置：'],
        table: { headers: ['系统', '应有的位置'], rows: [
          ['Windows', 'C:\\Program Files\\<Audacity 安装目录>\\Languages'],
          ['macOS', '在“应用程序”里右键 Audacity，选“显示包内容”，查看 Contents/Resources'],
          ['Linux', '软件仓库安装：/usr/share/locale；自行编译：/usr/local/share/locale'],
        ] },
        note: '3.x 重新安装不会改掉已保存的语言设置；只有在 Windows 安装程序里明确选择 Reset Preferences，才会恢复默认。',
      },
    ],
    tip: '中文界面是 Audacity 自带的功能，不需要购买“中文版”，也不需要下载汉化补丁。',
    sources: [
      ['官方 4.x 偏好设置总览', 'https://www.audacityteam.org/manual/preferences'],
      ['官方 4.x General 设置页', 'https://www.audacityteam.org/manual/preferences/general'],
      ['官方 3.x 语言设置说明', 'https://manual.audacityteam.org/man/languages.html'],
      ['官方 3.x Interface 偏好设置', 'https://manual.audacityteam.org/man/interface_preferences.html'],
    ],
  },
  {
    "slug": "install",
    "title": "Audacity 中文版下载安装：x64、ARM64 和便携版怎么选",
    "short": "下载安装与版本选择",
    "category": "安装",
    "intro": "按系统类型选择 x64 或 ARM64，区分 MSI 安装版与 7Z 便携版，并核对下载到的文件名。",
    "applies": "Windows 10 / 11 · Audacity 4.0.1",
    "sections": [
      {
        "title": "版本选择对照",
        "table": {
          "headers": [
            "系统或场景",
            "选择",
            "注意"
          ],
          "rows": [
            [
              "基于 x64 的处理器",
              "Windows x64 MSI",
              "常见 Intel / AMD 电脑"
            ],
            [
              "Windows 11，基于 ARM 的处理器",
              "Windows ARM64 MSI",
              "插件不受支持；FFmpeg 也需 ARM 版本"
            ],
            [
              "希望解压后运行",
              "对应架构的 7Z",
              "先完整解压整个文件夹"
            ],
            [
              "Windows 7 / XP 等旧系统",
              "查官方历史版本",
              "当前版本主要在 Windows 10 / 11 上测试"
            ]
          ]
        }
      },
      {
        "title": "完成安装后先试一段声音",
        "paragraphs": [
          "打开程序，导入一段自己的 WAV 或 MP3，确认能够播放，再录一小段麦克风声音。先保存工程，再导出音频。这样可以一次检查播放设备、录音设备和保存路径。"
        ]
      },
      {
        "title": "兼容性与更新",
        "paragraphs": [
          "官方当前主要测试 Windows 10 和 11。ARM64 版本的插件支持有限，安装 FFmpeg 时也需选择对应架构。旧系统请查看官方历史版本说明，不要把当前版本强行当成兼容版本。"
        ]
      },
      {
        "title": "下载后先核对文件名",
        "paragraphs": [
          "在下载页选好系统和电脑类型后，页面会列出对应的原始文件名，文件名里写着版本和架构：x64 安装版是 audacity-win-4.0.1-x86_64.msi，ARM64 安装版是 audacity-win-4.0.1-arm64.msi，便携版的扩展名是 .7z。下载到的文件名和所选不一致时，先不要安装，回到下载页重新选择。"
        ]
      },
      {
        "title": "MSI 和便携版各自怎么用",
        "steps": [
          "MSI：打开安装文件，按向导选择路径，完成后启动程序。",
          "7Z：用支持 7Z 的工具完整解压，再运行解压目录中的程序。不要只拖出一个可执行文件。",
          "首次启动可选择工作区、主题和片段样式。中文是程序界面语言，不是单独收费的安装包。",
          "升级前另存原工程副本。Audacity 4 的工程是 .aup4，Audacity 3 的工程是 .aup3；协作前确认对方版本。"
        ],
        "note": "Audacity 4 暂不支持 Nyquist、VAMP 旧插件；有这类工作流时，先核对迁移说明，保留需要的旧版本。"
      }
    ],
    "tip": "本站是独立中文指南。软件由 Audacity 项目开发，官网入口会明确标注来源。",
    "sources": [
      [
        "官方 Windows 下载和系统要求",
        "https://www.audacityteam.org/download/windows/"
      ],
      [
        "3 到 4 的官方迁移说明",
        "https://www.audacityteam.org/manual/new-in-audacity-4/audacity-3-to-4-transition-guide/"
      ],
      [
        "4.x 工程保存",
        "https://www.audacityteam.org/manual/getting-started/save-your-project/"
      ]
    ],
    "answer": "普通 Intel、AMD 电脑选 x64 MSI；Windows 11 ARM 电脑选 ARM64；需要免安装版本则选对应架构的 7Z。Audacity 自带多语言界面，中文使用不需要另外购买“汉化版”。",
    "related": [
      "record-voice",
      "ffmpeg",
      "no-sound"
    ],
    "updated": "2026-10-07"
  },
  {
    "slug": "record-voice",
    "title": "Audacity 麦克风录音教程：设备、单声道与录音电平",
    "short": "麦克风录音设置",
    "category": "录音",
    "intro": "录音设备、耳机、单声道和输入电平的设置对照，附短录音与左右声道检查。",
    "applies": "Audacity 4.x · 麦克风 / USB 声卡",
    "sections": [
      {
        "title": "4.0.1 中文菜单对照",
        "paragraphs": [
          "教程中的英文菜单可按下表在简体中文界面查找。这里只核对菜单名称；操作顺序和适用条件见后文。"
        ],
        "table": {
          "headers": [
            "教程中的英文",
            "简体中文界面"
          ],
          "rows": [
            [
              "Audio setup",
              "音频设置"
            ],
            [
              "Recording device",
              "录制设备"
            ],
            [
              "Playback device",
              "播放设备"
            ],
            [
              "Recording channels",
              "录制声道"
            ],
            [
              "Mono",
              "单声道"
            ],
            [
              "Rescan audio devices",
              "重新扫描音频设备"
            ]
          ]
        },
        "note": "核对版本：Audacity 4.0.1 Windows x64。名称取自官方便携包自带的 locale/audacity_zh_CN.qm（2026-10-07 核对），省略快捷键字母和省略号。更新语言包后译名可能变化；此表不用于判断 3.x 的菜单名称。",
        "links": [
          [
            "官方 4.0.1 发布记录",
            "https://github.com/audacity/audacity/releases/tag/Audacity-4.0.1"
          ]
        ]
      },
      {
        "title": "录音设置对照",
        "table": {
          "headers": [
            "选项",
            "应该选择",
            "选错的表现"
          ],
          "rows": [
            [
              "Recording device（录音设备）",
              "实际麦克风或 USB 声卡",
              "录到了内置麦克风，或没有输入"
            ],
            [
              "Playback device（播放设备）",
              "正在佩戴的耳机",
              "有波形，回放却听不到"
            ],
            [
              "Recording channels（录音声道）",
              "单支麦克风用 1 / Mono",
              "双输入声卡可能只录到一边"
            ],
            [
              "Rescan audio devices",
              "插入新设备后重新扫描",
              "新麦克风没有出现在列表"
            ]
          ]
        }
      },
      {
        "title": "避免爆音",
        "paragraphs": [
          "波形有平顶、表头出现削波提示时，降低输入增益并重新录制。当前 4.x 入门手册建议普通讲话的峰值保留在 −18 至 −6 dB 之间，给突然变大的声音留余量。已经录破的声音不能靠调低回放音量恢复。"
        ]
      },
      {
        "title": "开始正式录制",
        "paragraphs": [
          "给文件起好名字，保留一小段环境声。录完先保存工程并回放头尾，再导出可播放的音频。出现输入异常时，先检查系统麦克风权限、设备选择与连接。"
        ]
      },
      {
        "title": "一段能检查设置的短录音",
        "steps": [
          "在轨道区 Add track → Mono，点选轨道。",
          "按 R 或红色录音按钮，留几秒环境声，再说两句正式录制时会说的话。",
          "停止后戴耳机回放，检查清晰度、回声、左右声道和头尾。",
          "确认正确后再录长内容。说错时停顿一下重说，之后剪掉错误片段。"
        ],
        "note": "4.x 的 Microphone level 滑块会改变系统输入音量，其他应用也可能受到影响。"
      },
      {
        "title": "只有左边或右边有声音",
        "paragraphs": [
          "单个麦克风接双输入声卡的一路时，误选 Stereo 可能让另一个声道保持空白。先改为 Mono 短录验证，不要先调系统左右平衡。双麦克风采访应分别处理输入，不能照搬单支麦克风的设置。监听麦克风时先戴耳机并调低播放音量，避免扬声器声音再次被麦克风收进来。"
        ]
      }
    ],
    "tip": "已经录破的声音通常不能靠降低播放音量恢复。应在录制阶段解决输入过大。",
    "sources": [
      [
        "4.x 麦克风、声道和电平设置",
        "https://www.audacityteam.org/manual/getting-started/connect-your-microphone/"
      ],
      [
        "4.x 第一次录音",
        "https://www.audacityteam.org/manual/getting-started/make-your-first-recording/"
      ]
    ],
    "answer": "Audio setup 中选麦克风作为 Recording device、耳机作为 Playback device；单支麦克风选 Mono。先录 10 秒回放，确认没有选到笔记本或摄像头的麦克风。",
    "related": [
      "no-sound",
      "noise-reduction",
      "export-audio"
    ],
    "updated": "2026-10-07"
  },
  {
    "slug": "record-desktop",
    "title": "Audacity 录电脑声音（内录）：Windows WASAPI 与 loopback 设置",
    "short": "录电脑内部声音（内录）",
    "category": "录音",
    "intro": "Windows WASAPI 与回环（loopback）的内录设置顺序，附无声、录音报错和切换耳机排查。",
    "applies": "Windows 10 / 11 · Audacity 3.x / 4.x",
    "sections": [
      {
        "title": "4.0.1 中文菜单对照",
        "paragraphs": [
          "教程中的英文菜单可按下表在简体中文界面查找。这里只核对菜单名称；操作顺序和适用条件见后文。"
        ],
        "table": {
          "headers": [
            "教程中的英文",
            "简体中文界面"
          ],
          "rows": [
            [
              "Audio setup",
              "音频设置"
            ],
            [
              "Host",
              "主机"
            ],
            [
              "Recording device",
              "录制设备"
            ],
            [
              "Recording channels",
              "录制声道"
            ],
            [
              "Stereo",
              "立体声"
            ],
            [
              "Rescan audio devices",
              "重新扫描音频设备"
            ]
          ]
        },
        "note": "核对版本：Audacity 4.0.1 Windows x64。名称取自官方便携包自带的 locale/audacity_zh_CN.qm（2026-10-07 核对），省略快捷键字母和省略号。更新语言包后译名可能变化；此表不用于判断 3.x 的菜单名称。",
        "links": [
          [
            "官方 4.0.1 发布记录",
            "https://github.com/audacity/audacity/releases/tag/Audacity-4.0.1"
          ]
        ]
      },
      {
        "title": "先确定这次要录哪一路",
        "table": {
          "headers": [
            "目标",
            "输入设备",
            "说明"
          ],
          "rows": [
            [
              "浏览器、播放器或游戏声音",
              "当前输出设备的 (loopback)",
              "直接录系统输出"
            ],
            [
              "自己说话的声音",
              "麦克风 / USB 声卡",
              "使用麦克风录音设置"
            ],
            [
              "系统声音和麦克风同时录",
              "另需音频路由或混音设备",
              "只选 loopback 不会自动加上麦克风"
            ]
          ]
        }
      },
      {
        "title": "Windows 内录设置清单",
        "steps": [
          "查看 Windows 音量面板里的当前输出设备，例如“耳机（USB Audio）”。",
          "在 Audio setup 中把 Host 改为 Windows WASAPI。",
          "Recording device 选同名的“耳机（USB Audio）(loopback)”。设备名因电脑而异。",
          "Recording channels 先用 Stereo；部分回环设备不支持单声道。",
          "关闭输入监听，先播放音频，再录 10 秒。",
          "停止并回放确认。正式录制期间避免切换耳机或声卡。"
        ]
      },
      {
        "title": "更换耳机或声卡后重新选择回环",
        "paragraphs": [
          "loopback 对应具体的播放设备。从扬声器换到 USB 耳机后，原来的扬声器回环不会自动变成耳机回环。重新核对系统输出，必要时执行 Rescan audio devices，再选择新设备。蓝牙耳机进入通话模式时，设备名称也可能变化。"
        ]
      },
      {
        "title": "常见现象怎么查",
        "table": {
          "headers": [
            "现象",
            "优先检查",
            "下一步"
          ],
          "rows": [
            [
              "波形一直是直线",
              "输出设备是否与 loopback 一致",
              "重新选择当前输出的回环"
            ],
            [
              "按录音就报错",
              "是否正在播放，是否选 Stereo",
              "先播放一段音频再重试"
            ],
            [
              "录进了通知音或其他程序",
              "是否经过同一输出设备",
              "关闭不需要的声音后重录"
            ],
            [
              "切换蓝牙后无声",
              "新设备名称、通话模式",
              "重新扫描并选择新回环"
            ]
          ]
        }
      }
    ],
    "tip": "本页讲的是 Windows 回环录音。macOS 的音频路由不同，不能直接套用这套设备选项。",
    "sources": [
      [
        "官方电脑音频录制步骤",
        "https://support.audacityteam.org/basics/recording-desktop-audio"
      ],
      [
        "官方 Windows 回环与声道说明",
        "https://manual.audacityteam.org/man/tutorial_recording_computer_playback_on_windows.html"
      ]
    ],
    "answer": "Audio setup → Host 选 Windows WASAPI；Recording device 选当前耳机或扬声器名称后带 (loopback) 的设备。先播放电脑音频，再开始录音。",
    "related": [
      "no-sound",
      "record-voice",
      "export-audio"
    ],
    "updated": "2026-10-07"
  },
  {
    "slug": "edit-audio",
    "title": "Audacity 剪辑音频：剪掉停顿、分割片段与拼接",
    "short": "剪切、分割与拼接",
    "category": "剪辑",
    "intro": "选时间范围、移动片段、删除空隙和跨轨同步的操作区别，附 3.x / 4.x 快捷键说明。",
    "applies": "Audacity 4.x",
    "sections": [
      {
        "title": "选波形和选片段有什么不同",
        "table": {
          "headers": [
            "动作",
            "操作位置",
            "结果"
          ],
          "rows": [
            [
              "选取一句话或停顿",
              "在波形中拖动",
              "选中一个时间范围"
            ],
            [
              "移动整段素材",
              "拖动片段顶部标题条",
              "改变片段在时间线的位置"
            ],
            [
              "裁短片段边缘",
              "片段裁剪手柄",
              "保留工程后可重新调整"
            ],
            [
              "分割",
              "S → 点击片段",
              "把片段切成可分别移动的部分"
            ]
          ]
        }
      },
      {
        "title": "导入并保留原文件",
        "paragraphs": [
          "将自己的 WAV 或 MP3 拖进工程，先保存一个工程副本。导入后看到的波形表示音量随时间变化，并不意味着波形越大，声音质量就越好。"
        ]
      },
      {
        "title": "删除不需要的部分",
        "paragraphs": [
          "放大波形，拖选要删掉的时间范围，先试听边界，再删除。Audacity 4 可能会询问删除后的空隙处理方式；多轨工程还要考虑同步。避免剪掉句首、呼吸和尾音，操作不合适时及时撤销。"
        ]
      },
      {
        "title": "删除之后，空隙和其他轨道怎么处理",
        "paragraphs": [
          "Audacity 4 的删除行为会涉及关闭空隙和跨轨同步。第一次出现选项时，先按本次工作决定：单轨讲话剪停顿通常要让后半句接上；多轨采访或配乐则要考虑其他轨道是否一起移动。不要删完一条轨道才发现人声与配乐失去同步。"
        ],
        "table": {
          "headers": [
            "操作",
            "Audacity 4",
            "说明"
          ],
          "rows": [
            [
              "分割工具",
              "S",
              "切到剪刀工具后再点击"
            ],
            [
              "删除并让所有轨道关闭空隙",
              "Ctrl + Delete",
              "先确认需要跨轨同步"
            ],
            [
              "撤销",
              "Ctrl + Z",
              "剪完先听接缝，不对就撤销"
            ],
            [
              "导出音频",
              "Ctrl + Shift + E",
              "生成播放器可用的成品"
            ]
          ]
        },
        "note": "3.x 的分割常用 Ctrl + I，工具模式也不同。旧教程遇到差异时，按对应版本的快捷键列表核对。"
      },
      {
        "title": "对照练习：删掉 2 秒，后面的声音会不会移动？",
        "paragraphs": [
          "用自己的录音副本练习。下面以一条从 0 秒开始、总长 10 秒的轨道为例，只处理 4 秒到 6 秒这一段。表格给出按官方编辑规则应得到的结果，可用来检查是否选错了删除方式。"
        ],
        "steps": [
          "新建练习工程并导入录音，只保留这一条轨道。先保存副本，确认末尾在 10 秒。",
          "在波形上选中 4 秒到 6 秒。先播放选区，确认选中的是要处理的 2 秒。",
          "按 Ctrl + L 静音，观察后半段是否仍从 6 秒开始，再播放接缝。",
          "按 Ctrl + Z 撤销，重新选中相同范围，再按 Shift + Delete 删除并合拢。观察原来 6 秒处的声音是否移动到 4 秒。"
        ],
        "table": { "headers": ["操作", "预期末尾", "原来 6 秒处的声音"], "rows": [
          ["Ctrl + L：静音选区", "仍在 10 秒", "仍在 6 秒，前面留下 2 秒静音"],
          ["Shift + Delete：当前轨道删除并合拢", "移到 8 秒", "移到 4 秒，与前面的内容接上"],
          ["直接按 Delete", "取决于已选的删除方式", "先核对 Leave a gap / Close gap 设置"]
        ] },
        "note": "本例适用于 4.x 的 Windows / Linux 快捷键，是操作对照练习，未标为设备实测。多轨素材另需确认是否保持同步；剪完时长对了，也要试听句首、尾音和接缝。"
      },
      {
        "title": "交付前逐个听接缝",
        "steps": [
          "从每个接缝前几秒开始播放，检查句首和尾音有没有被剪掉。",
          "检查有没有重叠、重复半句话或意外长静音。",
          "回放完整时间线，另存工程，再导出。",
          "用普通播放器试听导出的文件，核对时长和头尾。"
        ]
      }
    ],
    "tip": "3.x 与 4.x 的剪辑工具、快捷键存在差别。本页按 4.x 官方指南整理。",
    "sources": [
      [
        "4.x 基础剪辑手册",
        "https://www.audacityteam.org/manual/getting-started/basic-audio-editing/"
      ],
      [
        "4.x 工具与同步编辑迁移说明",
        "https://www.audacityteam.org/manual/new-in-audacity-4/audacity-3-to-4-transition-guide/"
      ],
      [
        "官方片段编辑帮助",
        "https://support.audacityteam.org/basics/audacity-editing"
      ]
    ],
    "answer": "拖选波形处理一个时间范围；拖动片段顶部标题条移动整段。Audacity 4 按 S 切换剪刀工具并点击分割，旧版快捷键不能全部照搬。",
    "related": [
      "export-audio",
      "noise-reduction",
      "install"
    ],
    "updated": "2026-10-07"
  },
  {
    "slug": "noise-reduction",
    "title": "Audacity 降噪教程：噪声样本、参数与水声排查",
    "short": "背景底噪处理",
    "category": "声音处理",
    "intro": "先取纯噪声样本，再处理目标音频；查看 4.x 参数、Noise only 与降噪水声排查。",
    "applies": "Audacity 4.x；标注 3.x 输出名称差异",
    "sections": [
      {
        "title": "4.0.1 中文菜单对照",
        "paragraphs": [
          "教程中的英文菜单可按下表在简体中文界面查找。这里只核对菜单名称；操作顺序和适用条件见后文。"
        ],
        "table": {
          "headers": [
            "教程中的英文",
            "简体中文界面"
          ],
          "rows": [
            [
              "Effect",
              "效果器"
            ],
            [
              "Noise removal and repair",
              "噪音消除和修复"
            ],
            [
              "Noise reduction",
              "噪声抑制"
            ],
            [
              "Get noise profile",
              "获取噪声配置文件"
            ],
            [
              "Sensitivity",
              "灵敏度"
            ],
            [
              "Frequency smoothing",
              "频率平滑"
            ],
            [
              "Noise only",
              "仅噪音"
            ]
          ]
        },
        "note": "核对版本：Audacity 4.0.1 Windows x64。名称取自官方便携包自带的 locale/audacity_zh_CN.qm（2026-10-07 核对），省略快捷键字母和省略号。更新语言包后译名可能变化；此表不用于判断 3.x 的菜单名称。",
        "links": [
          [
            "官方 4.0.1 发布记录",
            "https://github.com/audacity/audacity/releases/tag/Audacity-4.0.1"
          ]
        ]
      },
      {
        "title": "先判断适不适合降噪",
        "table": {
          "headers": [
            "声音",
            "是否适合",
            "原因"
          ],
          "rows": [
            [
              "持续风扇声、底噪、电流嗡声",
              "可以尝试",
              "背景比较稳定，能找到纯噪声样本"
            ],
            [
              "关门、敲桌、个别爆音",
              "不适合整段套同一个样本",
              "是短促、突发的声音"
            ],
            [
              "背景说话声或音乐",
              "效果有限",
              "干扰与目标声音高度重叠"
            ],
            [
              "已经削波的人声",
              "降噪不能恢复原始细节",
              "应先解决录音输入过大"
            ]
          ]
        }
      },
      {
        "title": "提取纯噪声片段",
        "paragraphs": [
          "选择一段没有讲话、只有背景噪声的录音。打开 Effect → Noise removal and repair → Noise reduction，点击 Get noise profile。几秒纯环境声便于判断，不要把讲话声混进样本，也不要复制一个短片段来凑长度。"
        ]
      },
      {
        "title": "选择要处理的范围",
        "paragraphs": [
          "回到波形，选择需要清理的音频，再打开 Noise reduction。Ctrl + A 会选整个工程；有多条轨道时先确认处理对象。先从轻量处理开始，比较噪声是否减轻、人声是否变薄，再决定保留还是撤销。"
        ]
      },
      {
        "title": "4.x 参数的含义",
        "table": {
          "headers": [
            "参数",
            "作用",
            "当前 4.x 手册默认值"
          ],
          "rows": [
            [
              "Noise reduction",
              "噪声衰减量",
              "6 dB"
            ],
            [
              "Sensitivity",
              "把声音判为噪声的敏感程度",
              "6"
            ],
            [
              "Frequency smoothing",
              "相邻频段的平滑范围",
              "6 bands"
            ],
            [
              "Output",
              "处理后的声音或只输出噪声",
              "检查时可用 Noise only"
            ]
          ]
        },
        "note": "默认值不是所有录音的最佳参数。先轻量处理，再试听；保留一点底噪往往比处理出水声更好。"
      },
      {
        "title": "水声和人声变薄时这样回退",
        "steps": [
          "撤销这次处理，先降低 Noise reduction 或 Sensitivity。",
          "检查噪声样本有没有混入讲话声，必要时重新取样。",
          "用 4.x 的 Noise only 听准备删掉的部分。如果听到清楚人声，设置仍然过强。",
          "不同房间、麦克风或录音环境分别判断，不共用一个样本强行处理。"
        ]
      }
    ],
    "sources": [
      [
        "4.x Noise Reduction 参数与输出模式",
        "https://www.audacityteam.org/manual/effects/noise-removal-and-repair/noise-reduction/"
      ],
      [
        "官方降噪方法和适用噪声类型",
        "https://www.audacityteam.org/features/noise-reduction/"
      ],
      [
        "3.x Noise Reduction / Residue",
        "https://manual.audacityteam.org/man/noise_reduction.html"
      ]
    ],
    "answer": "先选纯噪声片段，在 Noise reduction 中执行 Get noise profile；再选目标音频，重新打开效果并应用。噪声样本中不要混入人声。",
    "related": [
      "record-voice",
      "edit-audio",
      "export-audio"
    ],
    "updated": "2026-10-07"
  },
  {
    "slug": "export-audio",
    "title": "Audacity 导出 MP3 / WAV：范围、声道、码率与文件大小",
    "short": "导出 MP3 和 WAV",
    "category": "导出",
    "intro": "完整工程与选区导出、声道和码率选择，以及 10 分钟音频的文件大小计算。",
    "applies": "Audacity 4.x",
    "sections": [
      {
        "title": "4.0.1 中文菜单对照",
        "paragraphs": [
          "教程中的英文菜单可按下表在简体中文界面查找。这里只核对菜单名称；操作顺序和适用条件见后文。"
        ],
        "table": {
          "headers": [
            "教程中的英文",
            "简体中文界面"
          ],
          "rows": [
            [
              "File",
              "文件"
            ],
            [
              "Export audio",
              "导出音频"
            ],
            [
              "Save to computer",
              "保存到计算机"
            ],
            [
              "Mono",
              "单声道"
            ],
            [
              "Stereo",
              "立体声"
            ]
          ]
        },
        "note": "核对版本：Audacity 4.0.1 Windows x64。名称取自官方便携包自带的 locale/audacity_zh_CN.qm（2026-10-07 核对），省略快捷键字母和省略号。更新语言包后译名可能变化；此表不用于判断 3.x 的菜单名称。",
        "links": [
          [
            "官方 4.0.1 发布记录",
            "https://github.com/audacity/audacity/releases/tag/Audacity-4.0.1"
          ]
        ]
      },
      {
        "title": "工程与成品对照",
        "table": {
          "headers": [
            "文件",
            "用途",
            "普通播放器"
          ],
          "rows": [
            [
              ".aup4（Audacity 4）",
              "保留轨道和编辑内容",
              "通常不能直接播放"
            ],
            [
              ".aup3（Audacity 3）",
              "旧版可编辑工程",
              "通常不能直接播放"
            ],
            [
              ".mp3",
              "发送、播放和上传",
              "通常可以"
            ],
            [
              ".wav / .flac",
              "无损成品或继续加工",
              "看播放器支持情况"
            ]
          ]
        }
      },
      {
        "title": "先保存工程",
        "paragraphs": [
          "Audacity 4 按 Ctrl + S 保存工程，首次保存时选择 Save to computer 并填写文件名，得到 .aup4。工作中的工程先放本机磁盘，退出程序后再复制一份到移动硬盘等其他位置备份。导出成品用于分享，工程保留给后续修改。"
        ]
      },
      {
        "title": "4.x 导出步骤与常用起点",
        "steps": [
          "打开 File → Export audio，检查 Type：完整成品、当前选区或 loop region。",
          "填写文件名、目录和格式。选区导出要核对高亮范围。",
          "普通人声可从 MP3 128 kbps 开始；音乐可从 256 kbps 开始。接收平台有明确要求时按它的要求。",
          "只有单声道人声就选 Mono，有真实左右空间信息时保留 Stereo。",
          "导出后用播放器检查时长、开头、结尾和两边声道。"
        ],
        "note": "导出只剩一小段时，先检查 Type；缺了轨道时检查 Mute / Solo。工程中能听到不代表导出的范围和轨道也正确。"
      },
      {
        "title": "10 分钟文件大概有多大",
        "paragraphs": [
          "以下是参数计算值，不是上传实测。MiB 按 1,048,576 字节计算；容器头、元数据和可变码率会使实际大小不同。"
        ],
        "table": {
          "headers": [
            "设置",
            "10 分钟估算",
            "字节计算"
          ],
          "rows": [
            [
              "MP3，固定 128 kbps",
              "约 9.16 MiB",
              "128,000 × 600 ÷ 8"
            ],
            [
              "MP3，固定 256 kbps",
              "约 18.31 MiB",
              "256,000 × 600 ÷ 8"
            ],
            [
              "WAV，44.1 kHz / 16-bit / Stereo",
              "约 100.94 MiB",
              "44,100 × 2 × 2 × 600"
            ]
          ]
        }
      }
    ],
    "tip": "重新导出不会自动恢复源素材已经丢失的音质。避免对同一个 MP3 反复有损压缩。",
    "sources": [
      [
        "4.x 导出范围和格式设置",
        "https://www.audacityteam.org/manual/getting-started/export-your-audio/"
      ],
      [
        "4.x 工程保存",
        "https://www.audacityteam.org/manual/getting-started/save-your-project/"
      ],
      [
        "官方保存与导出帮助",
        "https://support.audacityteam.org/basics/saving-and-exporting-projects"
      ],
      [
        "数字音频与采样格式",
        "https://manual.audacityteam.org/man/digital_audio.html"
      ]
    ],
    "answer": "File → Export audio，或 Ctrl + Shift + E。完整成品选 Export full project audio；只导出一段时选 Export selected audio。保存工程不会自动生成 MP3。",
    "related": [
      "edit-audio",
      "ffmpeg",
      "no-sound"
    ],
    "updated": "2026-10-07"
  },
  {
    "slug": "ffmpeg",
    "title": "Audacity 导入 M4A 失败：FFmpeg 安装与架构匹配",
    "short": "M4A / FFmpeg 排查",
    "category": "排查",
    "intro": "区分文件损坏与组件缺失，核对 Windows x64、ARM64 和 macOS 的 FFmpeg 架构。",
    "applies": "Windows / macOS · 版本与架构需匹配",
    "sections": [
      {
        "title": "先区分文件问题与组件问题",
        "table": {
          "headers": [
            "现象",
            "先检查",
            "下一步"
          ],
          "rows": [
            [
              "普通播放器也打不开",
              "大小、来源、是否下载完整",
              "先取得完整文件"
            ],
            [
              "提示缺少 FFmpeg",
              "Audacity 版本和架构",
              "按官方帮助安装匹配的库"
            ],
            [
              "装完仍提示无法加载",
              "x64 / ARM64 是否匹配",
              "重新核对安装入口"
            ],
            [
              "命令行 FFmpeg 能运行",
              "是否安装了 Audacity 需要的动态库",
              "ffmpeg.exe 本身不等于组件已匹配"
            ]
          ]
        }
      },
      {
        "title": "先确认文件本身",
        "paragraphs": [
          "先用播放器确认文件能正常播放，并查看真实格式。把扩展名从 .m4a 改为 .mp3 并不会完成格式转换。文件损坏或没有下载完整，也会导致导入失败。"
        ]
      },
      {
        "title": "判断是否需要 FFmpeg",
        "paragraphs": [
          "官方说明 M4A、WMA 等格式的导入和导出可能需要 FFmpeg。现代 Windows、macOS 版 Audacity 已内置 MP3 编码所需的 LAME，通常不必为导出 MP3 再寻找旧版插件。"
        ]
      },
      {
        "title": "按官方说明安装",
        "paragraphs": [
          "从本页下方的官方 FFmpeg 指南进入，按 Windows 或 macOS 选择对应方案。64 位程序与所需库的架构要一致；Windows ARM 设备不能直接照搬 x64 安装包。"
        ]
      },
      {
        "title": "重新打开并测试",
        "paragraphs": [
          "安装后重启 Audacity，用一份较短、已确认正常的文件测试。仍有错误时，记录软件版本、系统架构、文件格式和错误文字，再按官方帮助排查。"
        ]
      },
      {
        "title": "反馈错误时带上这些信息",
        "steps": [
          "Audacity 完整版本号、程序架构和操作系统。",
          "文件真实格式，以及普通播放器是否能播放。",
          "FFmpeg 安装来源和架构。",
          "报错原文，以及失败的是导入还是导出。"
        ],
        "note": "不要在公开反馈中贴私人文件路径或不便公开的音频。macOS 按 Intel / Apple Silicon 选择；Linux 按发行版和软件包说明处理，不照搬 Windows DLL。"
      }
    ],
    "tip": "无需下载来历不明的“万能解码包”。只安装官方帮助文档指向的匹配组件。",
    "sources": [
      [
        "官方 FFmpeg 安装指南",
        "https://support.audacityteam.org/basics/installing-ffmpeg"
      ]
    ],
    "answer": "M4A、WMA 等格式可能需要 FFmpeg 库。先确认文件能正常播放，再从官方帮助指向的入口安装与 Audacity 架构一致的组件。改扩展名不能转换格式。",
    "related": [
      "install",
      "export-audio",
      "no-sound"
    ],
    "updated": "2026-10-07"
  },
  {
    "slug": "no-sound",
    "title": "Audacity 录音没声音怎么办：麦克风、回放和内录排查",
    "short": "录音没声音怎么办",
    "category": "排查",
    "intro": "先看波形和表头，再查输入、输出或导出范围。用短录音逐项定位，不必一上来就重装软件。",
    "applies": "Windows 10 / 11 · Audacity 3.x / 4.x",
    "updated": "2026-10-07",
    "answer": "没有波形查输入，有波形却听不到查输出。麦克风录音和电脑内录用的是不同设备。每改一项设置，录 10 秒验证一次。",
    "related": [
      "record-voice",
      "record-desktop",
      "export-audio"
    ],
    "sections": [
      {
        "title": "先确定问题在哪一段",
        "table": {
          "headers": [
            "观察到的现象",
            "问题位置",
            "优先检查"
          ],
          "rows": [
            [
              "录音后一直是一条直线",
              "输入",
              "系统输入、麦克风权限、录音设备"
            ],
            [
              "有波形，播放没有声音",
              "输出",
              "播放设备、静音、系统音量"
            ],
            [
              "工程正常，导出文件没声音",
              "导出",
              "范围、Mute / Solo、格式"
            ]
          ]
        }
      },
      {
        "title": "麦克风录音没有波形",
        "steps": [
          "Windows 设置 → 系统 → 声音 → 输入，讲话时检查系统输入表头。",
          "系统也收不到时，检查接口、麦克风静音键和选中的输入名称。",
          "在 Windows 设置中搜索“麦克风隐私设置”，核对麦克风访问和桌面应用访问。",
          "回 Audacity 的 Audio setup 选同一个麦克风。刚插入的设备先 Rescan audio devices。",
          "单支麦克风用 Mono，再录 10 秒检查波形。"
        ]
      },
      {
        "title": "有波形，回放听不到",
        "steps": [
          "用普通播放器播放一份正常音频，确认耳机和系统音量正常。",
          "检查 Audacity 的 Playback device 是否是正在使用的耳机。",
          "确认目标轨道没有 Mute，其他轨道的 Solo 没有把它排除。",
          "从有内容的位置播放，不要把光标放在结尾空白处。"
        ]
      },
      {
        "title": "录电脑声音一片安静",
        "paragraphs": [
          "Host 用 Windows WASAPI，Recording device 选系统当前输出设备的 (loopback)，声道先用 Stereo。先让音频播放，再录制。只打开播放器但没有播放，可能没有音频流。切换 USB 或蓝牙耳机之后，重新选择对应回环。"
        ]
      },
      {
        "title": "出现 Error opening sound device",
        "paragraphs": [
          "记录报错原文，重新选择当前可用的设备。耳机或声卡断开再连接后，旧设备条目可能不再有效。重新扫描，核对主机和声道，再做短录音。仍失败时，保留版本、设备型号和设置记录，再查对应官方错误帮助。"
        ],
        "note": "一项一项修改，避免同时换主机、设备、声道后，不知道哪项影响了结果。"
      }
    ],
    "sources": [
      [
        "官方麦克风与重新扫描",
        "https://www.audacityteam.org/manual/getting-started/connect-your-microphone/"
      ],
      [
        "官方电脑音频录制排查",
        "https://support.audacityteam.org/basics/recording-desktop-audio"
      ],
      [
        "Windows 麦克风权限设置",
        "https://support.microsoft.com/windows/turn-on-app-permissions-for-your-microphone-in-windows-94991183-f69d-b4cf-4679-c98ca45f577a"
      ]
    ]
  }
];
