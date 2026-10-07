export interface GuideSection { title: string; paragraphs?: string[]; steps?: string[]; table?: { headers: string[]; rows: string[][] }; code?: string; note?: string; }
export interface Guide { slug: string; title: string; short: string; category: string; intro: string; applies: string; updated: string; answer: string; related: string[]; sections: GuideSection[]; tip?: string; sources: string[][]; }
export const guides: Guide[] = [
  {
    "slug": "install",
    "title": "Audacity 中文版下载安装：x64、ARM64 和便携版怎么选",
    "short": "下载安装与版本选择",
    "category": "安装",
    "intro": "按系统类型选择 x64 或 ARM64，区分 MSI 与 7Z，并用 SHA-256 核对原始文件。",
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
        "title": "用 PowerShell 核对下载文件",
        "paragraphs": [
          "在下载页对照文件名和 SHA-256。下面以 x64 MSI 为例；文件不在“下载”目录时，把路径改成实际路径。Hash 应与官方下载页和本站所列值一致，不一致时重新下载核对。"
        ],
        "code": "Get-FileHash \"$env:USERPROFILE\\Downloads\\audacity-win-4.0.1-x86_64.msi\" -Algorithm SHA256"
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
          "Audacity 4 按 Ctrl + S 保存工程，首次保存时选择 Save to computer 并填写文件名，得到 .aup4。工作中的工程先放本机磁盘，退出程序后再备份到网盘。导出成品用于分享，工程保留给后续修改。"
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
