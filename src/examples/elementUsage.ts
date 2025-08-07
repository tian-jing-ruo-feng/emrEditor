// 文档元素使用示例
import {
  createTextInputField,
  createDropdownInputField,
  createDateInputField,
  createTimeInputField,
  createNumericInputField,
  createRadioBox,
  createCheckBox,
  createLabel,
  createBarcode,
  createQRCode,
  createImage,
  createButton,
  createMedicalExpression,
  isValidElementType,
  isInputFieldElement,
  isMedicalExpressionElement,
} from '../utils/elementTypes'
import { MedicalExpressionType } from '../types/medical'
import type { DocumentElement } from '../types/emr'

// 示例1: 创建患者基本信息表单元素
export function createPatientInfoElements(): DocumentElement[] {
  return [
    // 患者姓名 - 文本输入
    createTextInputField('patientName', 'Text', {
      Placeholder: '请输入患者姓名',
      Required: true,
    }),

    // 性别 - 单选框
    createRadioBox('gender', 'genderGroup', '男', 'male'),
    createRadioBox('gender', 'genderGroup', '女', 'female'),

    // 年龄 - 数值输入
    createNumericInputField('age', 0, 150, 0, {
      Placeholder: '请输入年龄',
      Required: true,
    }),

    // 出生日期 - 日期输入
    createDateInputField('birthDate', {
      Placeholder: '请选择出生日期',
    }),

    // 联系电话 - 文本输入
    createTextInputField('phone', 'Text', {
      Placeholder: '请输入联系电话',
    }),

    // 婚姻状况 - 下拉列表
    createDropdownInputField('maritalStatus', ['未婚', '已婚', '离异', '丧偶'], false, {
      Placeholder: '请选择婚姻状况',
    }),

    // 职业 - 动态下拉列表
    createDropdownInputField('occupation', [], true, {
      Placeholder: '请选择或输入职业',
    }),
  ]
}

// 示例2: 创建医疗检查表单元素
export function createMedicalExamElements(): DocumentElement[] {
  return [
    // 检查日期时间
    createDateInputField('examDate', {
      Required: true,
    }),

    createTimeInputField('examTime', {
      Required: true,
    }),

    // 体温 - 数值输入（带小数）
    createNumericInputField('temperature', 35.0, 42.0, 1, {
      Placeholder: '请输入体温(°C)',
      Required: true,
    }),

    // 血压 - 数值输入
    createNumericInputField('systolicPressure', 60, 250, 0, {
      Placeholder: '收缩压(mmHg)',
    }),

    createNumericInputField('diastolicPressure', 40, 150, 0, {
      Placeholder: '舒张压(mmHg)',
    }),

    // 症状 - 复选框
    createCheckBox('symptoms', '头痛', 'headache'),
    createCheckBox('symptoms', '发热', 'fever'),
    createCheckBox('symptoms', '咳嗽', 'cough'),
    createCheckBox('symptoms', '腹痛', 'abdominalPain'),

    // 过敏史 - 文本输入
    createTextInputField('allergies', 'Text', {
      Placeholder: '请输入过敏史（如无请填写"无"）',
    }),
  ]
}

// 示例3: 创建医学图表元素
export function createMedicalChartElements(): DocumentElement[] {
  return [
    // 月经史图表
    createMedicalExpression('menstrualHistory', MedicalExpressionType.MenstrualHistory, {
      CycleDays: 28,
      Duration: 5,
      LastPeriodDate: '2024-01-15',
      IsRegular: true,
      Description: '月经规律，周期28天，持续5天',
    }),

    // 瞳孔图
    createMedicalExpression('pupilDiagram', MedicalExpressionType.PupilDiagram, {
      LeftPupilDiameter: 3.5,
      RightPupilDiameter: 3.5,
      PupilReaction: 'Normal',
      PupilShape: 'Round',
    }),

    // 恒牙牙位图
    createMedicalExpression('permanentTeeth', MedicalExpressionType.PermanentTeeth, {
      UpperTeeth: [
        { ToothNumber: 11, Status: 'Normal' },
        { ToothNumber: 12, Status: 'Caries' },
        { ToothNumber: 13, Status: 'Normal' },
      ],
      LowerTeeth: [
        { ToothNumber: 31, Status: 'Normal' },
        { ToothNumber: 32, Status: 'Missing' },
        { ToothNumber: 33, Status: 'Normal' },
      ],
      TotalTeeth: 32,
      MissingTeeth: 1,
    }),
  ]
}

// 示例4: 创建文档结构元素
export function createDocumentStructureElements(): DocumentElement[] {
  return [
    // 标题
    createLabel('documentTitle', '病历记录', {
      FontSize: 18,
      Bold: true,
      TextColor: '#000000',
    }),

    // 分隔线
    createHorizontalLine('titleSeparator', {
      Width: 100,
      Height: 2,
      Color: '#000000',
      Style: 'Solid',
    }),

    // 患者ID条形码
    createBarcode('patientBarcode', 'P202401001', 'Code128', {
      Height: 50,
      Width: 200,
      ShowText: true,
    }),

    // 二维码（包含患者信息链接）
    createQRCode('patientQRCode', 'https://emr.example.com/patient/P202401001', {
      Size: 100,
      ErrorCorrectionLevel: 'M',
    }),

    // 分页符
    createPageBreak('pageBreak1', 'Page'),

    // 页码
    createPageInfo('pageNumber', {
      PageNumberFormat: '第 {0} 页，共 {1} 页',
      ShowTotalPages: true,
      Prefix: '第',
      Suffix: '页',
    }),
  ]
}

// 示例5: 创建多媒体元素
export function createMediaElements(): DocumentElement[] {
  return [
    // 患者照片
    createImage('patientPhoto', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...', {
      Width: 200,
      Height: 250,
      Title: '患者照片',
      AltText: '患者正面照片',
      MaintainAspectRatio: true,
    }),

    // 心电图音频
    createMedia('ecgAudio', 'https://example.com/audio/ecg.mp3', 'Audio', {
      AutoPlay: false,
      Loop: false,
      ShowControls: true,
    }),

    // 超声检查视频
    createMedia('ultrasoundVideo', 'https://example.com/video/ultrasound.mp4', 'Video', {
      Width: 400,
      Height: 300,
      AutoPlay: false,
      ShowControls: true,
    }),
  ]
}

// 示例6: 创建交互式按钮
export function createInteractiveButtons(): DocumentElement[] {
  return [
    // 保存按钮
    createButton('saveButton', '保存病历', {
      ButtonType: 'Submit',
      Style: 'background-color: #4CAF50; color: white; padding: 10px 20px;',
    }),

    // 打印按钮
    createButton('printButton', '打印病历', {
      ButtonType: 'Button',
      Style: 'background-color: #2196F3; color: white; padding: 10px 20px;',
    }),

    // 重置按钮
    createButton('resetButton', '重置表单', {
      ButtonType: 'Reset',
      Style: 'background-color: #f44336; color: white; padding: 10px 20px;',
    }),
  ]
}

// 示例7: 元素验证和类型检查
export function validateElements(elements: DocumentElement[]): {
  valid: DocumentElement[]
  invalid: any[]
  inputFields: DocumentElement[]
  medicalExpressions: DocumentElement[]
} {
  const valid: DocumentElement[] = []
  const invalid: any[] = []
  const inputFields: DocumentElement[] = []
  const medicalExpressions: DocumentElement[] = []

  elements.forEach(element => {
    if (isValidElementType(element)) {
      valid.push(element)

      if (isInputFieldElement(element)) {
        inputFields.push(element)
      }

      if (isMedicalExpressionElement(element)) {
        medicalExpressions.push(element)
      }
    } else {
      invalid.push(element)
    }
  })

  return {
    valid,
    invalid,
    inputFields,
    medicalExpressions,
  }
}

// 示例8: 创建完整的病历模板
export function createCompleteMedicalRecord(): DocumentElement[] {
  return [
    // 文档标题
    ...createDocumentStructureElements(),

    // 患者基本信息
    createLabel('sectionTitle1', '患者基本信息', {
      FontSize: 16,
      Bold: true,
      TextColor: '#333333',
    }),
    ...createPatientInfoElements(),

    // 医疗检查
    createLabel('sectionTitle2', '医疗检查', {
      FontSize: 16,
      Bold: true,
      TextColor: '#333333',
    }),
    ...createMedicalExamElements(),

    // 医学图表
    createLabel('sectionTitle3', '医学图表', {
      FontSize: 16,
      Bold: true,
      TextColor: '#333333',
    }),
    ...createMedicalChartElements(),

    // 多媒体资料
    createLabel('sectionTitle4', '多媒体资料', {
      FontSize: 16,
      Bold: true,
      TextColor: '#333333',
    }),
    ...createMediaElements(),

    // 操作按钮
    ...createInteractiveButtons(),
  ]
}

// 使用示例
export function exampleUsage() {
  // 创建完整的病历模板
  const medicalRecord = createCompleteMedicalRecord()

  // 验证所有元素
  const validation = validateElements(medicalRecord)

  console.log('有效元素数量:', validation.valid.length)
  console.log('无效元素数量:', validation.invalid.length)
  console.log('输入域元素数量:', validation.inputFields.length)
  console.log('医学表达式元素数量:', validation.medicalExpressions.length)

  // 输出验证结果
  if (validation.invalid.length > 0) {
    console.warn('发现无效元素:', validation.invalid)
  }

  return medicalRecord
}
