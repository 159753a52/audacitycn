export const guides = [
  { slug: 'install', title: 'Audacity 下载与安装：先选对版本', short: '下载与安装', category: '开始使用', minutes: 4, intro: '先确认电脑架构，再选择安装版或便携版。第一次使用时，版本和来源比安装速度更重要。', applies: 'Windows 10 / 11 · Audacity 4.0.1', sections: [
    { title: '确认你的电脑类型', text: '在 Windows「设置 → 系统 → 系统信息 / 关于」中查看系统类型。常见 Intel、AMD 电脑选择 x64；只有明确写着 ARM 的电脑才选择 ARM64。不要根据“64 位”三个字判断 ARM。' },
    { title: '选择安装方式', text: 'MSI 是安装版，适合第一次使用。7Z 是便携压缩包，需要先完整解压到文件夹。下载页同时提供来源与 SHA-256，文件名和版本应与所选条目一致。下载失败时，返回官方发布页重新选择文件。' },
    { title: '完成安装后先试一段声音', text: '打开程序，导入一段自己的 WAV 或 MP3，确认能够播放，再录一小段麦克风声音。先保存工程，再导出音频。这样可以一次检查播放设备、录音设备和保存路径。' },
    { title: '兼容性与更新', text: '官方当前主要测试 Windows 10 和 11。ARM64 版本的插件支持有限，安装 FFmpeg 时也需选择对应架构。旧系统请查看官方历史版本说明，不要把当前版本强行当成兼容版本。' }
  ], tip: '本站是独立中文指南。软件由 Audacity 项目开发，官网入口会明确标注来源。', sources: [['官方下载与系统要求', 'https://www.audacityteam.org/download/windows/']] },
  { slug: 'record-voice', title: 'Audacity 麦克风录音：先录 10 秒再开始', short: '录制麦克风', category: '录音', minutes: 4, intro: '把输入设备、录音电平和回放检查好，再录长内容。一次短测试能减少整段重录。', applies: 'Audacity 4.x · 麦克风 / USB 声卡', sections: [
    { title: '选择正确的输入', text: '连接麦克风后，在 Audio Setup（音频设置）的录音设备中选择它。设备未出现时，重新扫描音频设备。注意摄像头麦克风和虚拟音频设备也可能出现在列表中。' },
    { title: '先做短录音', text: '普通单支麦克风通常使用单声道。按红色录音按钮，说一段与你正式录制时音量接近的话，停止后戴耳机回放。确认没有录到笔记本内置麦克风。' },
    { title: '避免爆音', text: '波形出现明显平顶、表头进入红区，通常说明输入过大。降低麦克风增益或拉开距离，重新试录。官方建议普通说话时可参考 -18 至 -12 dB 的电平范围，并给突然变大的声音留出空间。' },
    { title: '开始正式录制', text: '给文件起好名字，保留一小段环境声。录完先保存工程并回放头尾，再导出可播放的音频。出现输入异常时，先检查系统麦克风权限、设备选择与连接。' }
  ], tip: '已经录破的声音通常不能靠降低播放音量恢复。应在录制阶段解决输入过大。', sources: [['官方麦克风录音指南', 'https://support.audacityteam.org/basics/recording-your-voice-and-microphone']] },
  { slug: 'record-desktop', title: 'Audacity 录电脑声音：Windows WASAPI 设置', short: '录制电脑声音', category: '录音', minutes: 3, intro: '录电脑内部播放的声音时，选择回环设备，不需要把扬声器的声音再通过麦克风录一遍。', applies: 'Windows · Audacity 4.x', sections: [
    { title: '切换到 Windows WASAPI', text: '打开 Audio Setup（音频设置），将 Host（音频主机）选择为 Windows WASAPI。录音设备选择当前播放设备对应、名称后带 loopback 的条目。' },
    { title: '让声音先播放起来', text: '先播放你有权录制的音频，再按录音按钮。没有活动音频流时，WASAPI 回环可能无法开始录制。切换耳机或蓝牙设备后，需要重新核对回环设备。' },
    { title: '检查录到的是哪一路', text: '先录几秒并停止回放。电脑通知音、游戏和其他程序的声音也可能被录进去，录制前可关闭不需要的声音。回环录音时不要开启输入监听，避免把监听声音重新录入。' },
    { title: '无声时按顺序检查', text: '先确认系统正在使用哪个播放设备，再确认 Audacity 选择同一设备的 loopback。最后检查播放应用是否静音，以及声卡或蓝牙连接是否发生变化。' }
  ], tip: '本页讲的是 Windows 回环录音。macOS 的音频路由不同，不能直接套用这套设备选项。', sources: [['官方电脑音频录制指南', 'https://support.audacityteam.org/basics/recording-desktop-audio']] },
  { slug: 'edit-audio', title: 'Audacity 音频剪辑：删除、分割与移动片段', short: '剪切与拼接', category: '剪辑', minutes: 4, intro: '把选择范围、分割片段和移动片段分清，剪掉停顿、调整顺序就容易多了。', applies: 'Audacity 4.x', sections: [
    { title: '导入并保留原文件', text: '将自己的 WAV 或 MP3 拖进工程，先保存一个工程副本。导入后看到的波形表示音量随时间变化，并不意味着波形越大，声音质量就越好。' },
    { title: '删除不需要的部分', text: '在波形中拖选需要删除的时间范围，再按 Delete。先放大波形并试听边界，避免把句首、呼吸和尾音剪掉。操作不合适时及时撤销。' },
    { title: '分割和调整顺序', text: 'Audacity 4 可使用剪刀形状的分割工具，快捷键 S 切换到该工具，再点击片段完成分割。拖动片段顶部的标题条移动片段，而不是拖动波形选择范围。' },
    { title: '检查接缝，再导出', text: '从接缝前开始回放，确认没有重叠、意外空白或突变。片段边缘的裁剪与永久删除不同；保留工程便于以后重新调整。确认整个时间线都正确后，再导出成音频。' }
  ], tip: '3.x 与 4.x 的剪辑工具、快捷键存在差别。本页按 4.x 官方指南整理。', sources: [['官方音频剪辑指南', 'https://support.audacityteam.org/basics/audacity-editing']] },
  { slug: 'noise-reduction', title: 'Audacity 降噪：先取噪声样本，再轻量处理', short: '去除背景底噪', category: '声音处理', minutes: 4, intro: '持续的风扇声、电流声和底噪可以尝试降噪。突发说话声、音乐和交通声不一定适合相同处理。', applies: 'Audacity 3.x Noise Reduction 工作流；4.x 请对照当前帮助', sections: [
    { title: '先判断噪声类型', text: '这套方法适合相对稳定的背景噪声。如果杂音和人声重叠得很严重，降噪也可能破坏人声。先复制轨道或保存工程副本，便于比较处理前后。' },
    { title: '提取纯噪声片段', text: '选择一段没有讲话、只有背景噪声的录音。在 3.x 的 Effect → Noise Removal and Repair → Noise Reduction 中获取噪声样本（Get Noise Profile）。不要把人声混进样本。' },
    { title: '选择要处理的范围', text: '再选中需要降噪的音频，重新打开降噪效果。先使用较轻的处理，通过预览试听；不应为追求彻底安静而盲目提高降噪量。' },
    { title: '检查有没有损伤人声', text: '出现水声、金属感或尾音被吞掉时，降低降噪强度或敏感度。试听 Residue（残留）时如果听到清晰人声，说明一部分目标声音也正在被删掉。保留自然、可理解的人声更重要。' }
  ], tip: '噪声样本会随录音环境变化。换房间、麦克风或录音片段后，应重新判断样本是否适用。', sources: [['官方 Noise Reduction 手册', 'https://manual.audacityteam.org/man/noise_reduction.html'], ['Audacity 4 帮助入口', 'https://www.audacityteam.org/help/']] },
  { slug: 'export-audio', title: 'Audacity 导出 MP3 / WAV：工程文件和音频的区别', short: '导出 MP3 / WAV', category: '导出', minutes: 3, intro: '保存工程是为了继续编辑；导出音频是为了播放和分享。两种文件都值得保留。', applies: 'Audacity 4.x', sections: [
    { title: '先保存工程', text: '工程文件保留轨道、片段和编辑信息。使用 File → Save Project 保存到本机磁盘。不要把正在录制或编辑的工程直接放在同步网盘、U 盘或不稳定的网络存储上。' },
    { title: '选择导出音频', text: '使用 File → Export Audio，选择目标路径和格式。需要继续处理或无损保存时可选择 WAV、FLAC；强调兼容性和文件体积时可考虑 MP3。' },
    { title: '核对范围和声道', text: '导出前确认是整个工程还是选定范围。只有单支麦克风的人声通常不需要立体声；包含左右空间信息的音乐则应保留相应声道。不要把工程后面的空白一起误导出。' },
    { title: '用播放器检查成品', text: '打开导出的文件，核对开头、结尾、时长和声音。将工程留作后续修改，分享时发送 MP3 或 WAV 等成品，而不是只把工程文件发给对方。' }
  ], tip: '重新导出不会自动恢复源素材已经丢失的音质。避免对同一个 MP3 反复有损压缩。', sources: [['官方保存与导出指南', 'https://support.audacityteam.org/basics/saving-and-exporting-projects']] },
  { slug: 'ffmpeg', title: 'Audacity 导入 M4A 失败？检查 FFmpeg 库', short: 'M4A 与 FFmpeg', category: '排查', minutes: 3, intro: '有些音频格式需要额外的 FFmpeg 库。先确认格式和软件架构，再安装官方文档指向的组件。', applies: 'Windows / macOS · 版本与架构需匹配', sections: [
    { title: '先确认文件本身', text: '先用播放器确认文件能正常播放，并查看真实格式。把扩展名从 .m4a 改为 .mp3 并不会完成格式转换。文件损坏或没有下载完整，也会导致导入失败。' },
    { title: '判断是否需要 FFmpeg', text: '官方说明 M4A、WMA 等格式的导入和导出可能需要 FFmpeg。现代 Windows、macOS 版 Audacity 已内置 MP3 编码所需的 LAME，通常不必为导出 MP3 再寻找旧版插件。' },
    { title: '按官方说明安装', text: '从本页下方的官方 FFmpeg 指南进入，按 Windows 或 macOS 选择对应方案。64 位程序与所需库的架构要一致；Windows ARM 设备不能直接照搬 x64 安装包。' },
    { title: '重新打开并测试', text: '安装后重启 Audacity，用一份较短、已确认正常的文件测试。仍有错误时，记录软件版本、系统架构、文件格式和错误文字，再按官方帮助排查。' }
  ], tip: '无需下载来历不明的“万能解码包”。只安装官方帮助文档指向的匹配组件。', sources: [['官方 FFmpeg 安装指南', 'https://support.audacityteam.org/basics/installing-ffmpeg']] }
];
