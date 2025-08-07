# EMR 文档元素类型定义

本文档描述了电子病历系统中所有文档元素的 TypeScript 类型定义。

## 文件结构

```
src/types/
├── emr.d.ts          # 主要类型定义文件
├── medical.d.ts      # 医学相关类型定义
└── README.md         # 本文档
```

## 主要类型定义

### 基础元素接口

所有文档元素都继承自 `BaseElement` 接口：

```typescript
interface BaseElement {
  ElementHashCode?: number
  ElementID?: string | number | null
  ElementName?: string | null
  ElementTypeName?: string | null
}
```

### 文档元素类型

系统支持以下 13 种文档元素类型：

#### 1. 文本输入域 (XTextInputFieldElement)

支持多种输入样式：

- `Text` - 普通文本输入
- `DropdownList` - 下拉列表（静态/动态）
- `Time` - 时间输入
- `Date` - 日期输入
- `DateTime` - 日期时间输入
- `DateTimeWithoutSecond` - 不带秒的日期时间输入
- `Numeric` - 数值输入

```typescript
// 创建文本输入域
const textField = createTextInputField('patientName', 'Text', {
  Placeholder: '请输入患者姓名',
  Required: true,
})

// 创建下拉列表
const dropdownField = createDropdownInputField(
  'maritalStatus',
  ['未婚', '已婚', '离异', '丧偶'],
  false,
  {
    Placeholder: '请选择婚姻状况',
  },
)

// 创建数值输入域
const numericField = createNumericInputField('age', 0, 150, 0, {
  Placeholder: '请输入年龄',
  Required: true,
})
```

#### 2. 单选框 (XTextRadioBoxElement)

```typescript
const maleRadio = createRadioBox('gender', 'genderGroup', '男', 'male')
const femaleRadio = createRadioBox('gender', 'genderGroup', '女', 'female')
```

#### 3. 复选框 (XTextCheckBoxElement)

```typescript
const headacheCheck = createCheckBox('symptoms', '头痛', 'headache')
const feverCheck = createCheckBox('symptoms', '发热', 'fever')
```

#### 4. 标签文本 (XTextLabelElement)

```typescript
const titleLabel = createLabel('documentTitle', '病历记录', {
  FontSize: 18,
  Bold: true,
  TextColor: '#000000',
})
```

#### 5. 条形码 (XTextNewBarcodeElement)

```typescript
const barcode = createBarcode('patientBarcode', 'P202401001', 'Code128', {
  Height: 50,
  Width: 200,
  ShowText: true,
})
```

#### 6. 二维码 (XTextTDBarcodeElement)

```typescript
const qrCode = createQRCode('patientQRCode', 'https://emr.example.com/patient/P202401001', {
  Size: 100,
  ErrorCorrectionLevel: 'M',
})
```

#### 7. 分页符 (XTextPageBreakElement)

```typescript
const pageBreak = createPageBreak('pageBreak1', 'Page')
```

#### 8. 图片 (XTextImageElement)

```typescript
const image = createImage('patientPhoto', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...', {
  Width: 200,
  Height: 250,
  Title: '患者照片',
  AltText: '患者正面照片',
})
```

#### 9. 按钮 (XTextButtonElement)

```typescript
const saveButton = createButton('saveButton', '保存病历', {
  ButtonType: 'Submit',
  Style: 'background-color: #4CAF50; color: white;',
})
```

#### 10. 水平线 (XTextHorizontalLineElement)

```typescript
const separator = createHorizontalLine('titleSeparator', {
  Width: 100,
  Height: 2,
  Color: '#000000',
  Style: 'Solid',
})
```

#### 11. 页码 (XTextPageInfoElement)

```typescript
const pageInfo = createPageInfo('pageNumber', {
  PageNumberFormat: '第 {0} 页，共 {1} 页',
  ShowTotalPages: true,
})
```

#### 12. 多媒体 (XTextMediaElement)

```typescript
const audio = createMedia('ecgAudio', 'https://example.com/audio/ecg.mp3', 'Audio', {
  AutoPlay: false,
  ShowControls: true,
})

const video = createMedia('ultrasoundVideo', 'https://example.com/video/ultrasound.mp4', 'Video', {
  Width: 400,
  Height: 300,
  ShowControls: true,
})
```

#### 13. 医学表达式 (XTextNewMedicalExpressionElement)

支持 15 种医学图表类型：

```typescript
// 月经史
const menstrualHistory = createMedicalExpression(
  'menstrualHistory',
  MedicalExpressionType.MenstrualHistory,
  {
    CycleDays: 28,
    Duration: 5,
    LastPeriodDate: '2024-01-15',
    IsRegular: true,
  },
)

// 瞳孔图
const pupilDiagram = createMedicalExpression('pupilDiagram', MedicalExpressionType.PupilDiagram, {
  LeftPupilDiameter: 3.5,
  RightPupilDiameter: 3.5,
  PupilReaction: 'Normal',
})

// 恒牙牙位图
const permanentTeeth = createMedicalExpression(
  'permanentTeeth',
  MedicalExpressionType.PermanentTeeth,
  {
    UpperTeeth: [
      { ToothNumber: 11, Status: 'Normal' },
      { ToothNumber: 12, Status: 'Caries' },
    ],
    LowerTeeth: [
      { ToothNumber: 31, Status: 'Normal' },
      { ToothNumber: 32, Status: 'Missing' },
    ],
  },
)
```

## 医学表达式类型

### 支持的医学图表类型

1. **月经史** (MenstrualHistory) - 支持四种医学月经史公式
2. **瞳孔图** (PupilDiagram) - 瞳孔直径和反应记录
3. **光定位图** (LightPositioning) - 光定位测试结果
4. **眼球突出度图** (Exophthalmos) - 眼球突出度测量
5. **斜视符号图** (StrabismusSymbol) - 斜视类型和角度
6. **胎心图** (FetalHeartRate) - 胎心率监测数据
7. **疼痛指数图** (PainIndex) - 疼痛评分和类型
8. **分数公式** (FractionFormula) - 数学分数表示
9. **恒牙牙位图** (PermanentTeeth) - 恒牙状态记录
10. **乳牙牙位图** (DeciduousTeeth) - 乳牙状态记录
11. **PD牙位图** (PDTeeth) - 牙周袋深度记录
12. **病变上牙牙位图** (LesionUpperTeeth) - 上颌病变记录
13. **病变下牙牙位图** (LesionLowerTeeth) - 下颌病变记录
14. **电活力测试牙位图** (ElectricVitalityTest) - 牙髓活力测试
15. **固定桥牙位图** (FixedBridge) - 固定桥修复记录
16. **复合牙位图/替牙列** (CompositeTeeth) - 混合牙列状态

## 工具函数

### 元素创建函数

所有元素类型都有对应的创建函数，位于 `src/utils/elementTypes.ts`：

- `createTextInputField()` - 创建文本输入域
- `createDropdownInputField()` - 创建下拉列表
- `createDateInputField()` - 创建日期输入域
- `createTimeInputField()` - 创建时间输入域
- `createNumericInputField()` - 创建数值输入域
- `createRadioBox()` - 创建单选框
- `createCheckBox()` - 创建复选框
- `createLabel()` - 创建标签文本
- `createBarcode()` - 创建条形码
- `createQRCode()` - 创建二维码
- `createPageBreak()` - 创建分页符
- `createImage()` - 创建图片
- `createButton()` - 创建按钮
- `createHorizontalLine()` - 创建水平线
- `createPageInfo()` - 创建页码
- `createMedia()` - 创建多媒体
- `createMedicalExpression()` - 创建医学表达式

### 类型检查函数

- `isValidElementType()` - 验证元素类型
- `isInputFieldElement()` - 检查是否为输入域元素
- `isMedicalExpressionElement()` - 检查是否为医学表达式元素
- `isDropdownInput()` - 检查是否为下拉列表
- `isDynamicDropdown()` - 检查是否为动态下拉列表

## 使用示例

### 创建完整的病历模板

```typescript
import { createCompleteMedicalRecord, validateElements } from '../examples/elementUsage'

// 创建病历模板
const medicalRecord = createCompleteMedicalRecord()

// 验证元素
const validation = validateElements(medicalRecord)

console.log('有效元素数量:', validation.valid.length)
console.log('输入域元素数量:', validation.inputFields.length)
console.log('医学表达式元素数量:', validation.medicalExpressions.length)
```

### 创建患者信息表单

```typescript
import { createPatientInfoElements } from '../examples/elementUsage'

const patientForm = createPatientInfoElements()
```

### 创建医疗检查表单

```typescript
import { createMedicalExamElements } from '../examples/elementUsage'

const examForm = createMedicalExamElements()
```

## 类型安全

所有类型定义都提供了完整的 TypeScript 类型检查：

- 元素类型验证
- 属性类型检查
- 枚举值限制
- 联合类型支持

## 扩展性

类型定义支持扩展：

1. 添加新的元素类型
2. 扩展现有元素的属性
3. 添加新的医学表达式类型
4. 自定义验证规则

## 注意事项

1. 所有元素都必须有唯一的 `ElementName`
2. 单选框必须属于同一个 `GroupName`
3. 医学表达式需要指定正确的 `MedicalExpressionType`
4. 动态下拉列表需要通过代码设置选项
5. 图片支持 base64 和 URL 两种格式
6. 多媒体元素需要处理跨域问题
