// 文档元素类型工具函数
import type {
  DocumentElement,
  XTextInputFieldElement,
  XTextRadioBoxElement,
  XTextCheckBoxElement,
  XTextLabelElement,
  XTextNewBarcodeElement,
  XTextTDBarcodeElement,
  XTextPageBreakElement,
  XTextImageElement,
  XTextButtonElement,
  XTextHorizontalLineElement,
  XTextPageInfoElement,
  XTextMediaElement,
  XTextNewMedicalExpressionElement,
  InnerEditStyle,
} from '../types/fieldElement.d.ts'
import type { MedicalExpressionType } from '../types/medical'

/**
 * 创建文本输入域元素
 */
export function createTextInputField(
  elementName: string,
  innerEditStyle: InnerEditStyle = 'Text',
  options: Partial<XTextInputFieldElement> = {},
): XTextInputFieldElement {
  return {
    ElementType: 'XTextInputFieldElement',
    ElementName: elementName,
    InnerEditStyle: innerEditStyle,
    ...options,
  }
}

/**
 * 创建下拉列表输入域元素
 */
export function createDropdownInputField(
  elementName: string,
  dropdownItems: string[] = [],
  isDynamic: boolean = false,
  options: Partial<XTextInputFieldElement> = {},
): XTextInputFieldElement {
  return {
    ElementType: 'XTextInputFieldElement',
    ElementName: elementName,
    InnerEditStyle: 'DropdownList',
    DynamicListItems: isDynamic,
    DropdownItems: isDynamic ? undefined : dropdownItems,
    ...options,
  }
}

/**
 * 创建时间输入域元素
 */
export function createTimeInputField(
  elementName: string,
  options: Partial<XTextInputFieldElement> = {},
): XTextInputFieldElement {
  return {
    ElementType: 'XTextInputFieldElement',
    ElementName: elementName,
    InnerEditStyle: 'Time',
    ...options,
  }
}

/**
 * 创建日期输入域元素
 */
export function createDateInputField(
  elementName: string,
  options: Partial<XTextInputFieldElement> = {},
): XTextInputFieldElement {
  return {
    ElementType: 'XTextInputFieldElement',
    ElementName: elementName,
    InnerEditStyle: 'Date',
    ...options,
  }
}

/**
 * 创建日期时间输入域元素
 */
export function createDateTimeInputField(
  elementName: string,
  includeSeconds: boolean = true,
  options: Partial<XTextInputFieldElement> = {},
): XTextInputFieldElement {
  return {
    ElementType: 'XTextInputFieldElement',
    ElementName: elementName,
    InnerEditStyle: includeSeconds ? 'DateTime' : 'DateTimeWithoutSecond',
    ...options,
  }
}

/**
 * 创建数值输入域元素
 */
export function createNumericInputField(
  elementName: string,
  minValue?: number,
  maxValue?: number,
  decimalPlaces?: number,
  options: Partial<XTextInputFieldElement> = {},
): XTextInputFieldElement {
  return {
    ElementType: 'XTextInputFieldElement',
    ElementName: elementName,
    InnerEditStyle: 'Numeric',
    MinValue: minValue,
    MaxValue: maxValue,
    DecimalPlaces: decimalPlaces,
    ...options,
  }
}

/**
 * 创建单选框元素
 */
export function createRadioBox(
  elementName: string,
  groupName: string,
  text: string,
  value: string,
  options: Partial<XTextRadioBoxElement> = {},
): XTextRadioBoxElement {
  return {
    ElementType: 'XTextRadioBoxElement',
    ElementName: elementName,
    GroupName: groupName,
    Text: text,
    Value: value,
    ...options,
  }
}

/**
 * 创建复选框元素
 */
export function createCheckBox(
  elementName: string,
  text: string,
  value: string,
  options: Partial<XTextCheckBoxElement> = {},
): XTextCheckBoxElement {
  return {
    ElementType: 'XTextCheckBoxElement',
    ElementName: elementName,
    Text: text,
    Value: value,
    ...options,
  }
}

/**
 * 创建标签文本元素
 */
export function createLabel(
  elementName: string,
  text: string,
  options: Partial<XTextLabelElement> = {},
): XTextLabelElement {
  return {
    ElementType: 'XTextLabelElement',
    ElementName: elementName,
    Text: text,
    ...options,
  }
}

/**
 * 创建条形码元素
 */
export function createBarcode(
  elementName: string,
  barcodeText: string,
  barcodeType: string = 'Code128',
  options: Partial<XTextNewBarcodeElement> = {},
): XTextNewBarcodeElement {
  return {
    ElementType: 'XTextNewBarcodeElement',
    ElementName: elementName,
    BarcodeText: barcodeText,
    BarcodeType: barcodeType,
    ...options,
  }
}

/**
 * 创建二维码元素
 */
export function createQRCode(
  elementName: string,
  qrCodeText: string,
  options: Partial<XTextTDBarcodeElement> = {},
): XTextTDBarcodeElement {
  return {
    ElementType: 'XTextTDBarcodeElement',
    ElementName: elementName,
    QRCodeText: qrCodeText,
    ...options,
  }
}

/**
 * 创建分页符元素
 */
export function createPageBreak(
  elementName: string,
  breakType: 'Page' | 'Column' | 'Section' = 'Page',
  options: Partial<XTextPageBreakElement> = {},
): XTextPageBreakElement {
  return {
    ElementType: 'XTextPageBreakElement',
    ElementName: elementName,
    BreakType: breakType,
    ...options,
  }
}

/**
 * 创建图片元素
 */
export function createImage(
  elementName: string,
  imageSource: string,
  options: Partial<XTextImageElement> = {},
): XTextImageElement {
  return {
    ElementType: 'XTextImageElement',
    ElementName: elementName,
    ImageSource: imageSource,
    ...options,
  }
}

/**
 * 创建按钮元素
 */
export function createButton(
  elementName: string,
  text: string,
  options: Partial<XTextButtonElement> = {},
): XTextButtonElement {
  return {
    ElementType: 'XTextButtonElement',
    ElementName: elementName,
    Text: text,
    ...options,
  }
}

/**
 * 创建水平线元素
 */
export function createHorizontalLine(
  elementName: string,
  options: Partial<XTextHorizontalLineElement> = {},
): XTextHorizontalLineElement {
  return {
    ElementType: 'XTextHorizontalLineElement',
    ElementName: elementName,
    ...options,
  }
}

/**
 * 创建页码元素
 */
export function createPageInfo(
  elementName: string,
  options: Partial<XTextPageInfoElement> = {},
): XTextPageInfoElement {
  return {
    ElementType: 'XTextPageInfoElement',
    ElementName: elementName,
    ...options,
  }
}

/**
 * 创建多媒体元素
 */
export function createMedia(
  elementName: string,
  mediaSource: string,
  mediaType: 'Audio' | 'Video',
  options: Partial<XTextMediaElement> = {},
): XTextMediaElement {
  return {
    ElementType: 'XTextMediaElement',
    ElementName: elementName,
    MediaSource: mediaSource,
    MediaType: mediaType,
    ...options,
  }
}

/**
 * 创建医学表达式元素
 */
export function createMedicalExpression(
  elementName: string,
  medicalExpressionType: MedicalExpressionType,
  expressionData?: any,
  options: Partial<XTextNewMedicalExpressionElement> = {},
): XTextNewMedicalExpressionElement {
  return {
    ElementType: 'XTextNewMedicalExpressionElement',
    ElementName: elementName,
    MedicalExpressionType: medicalExpressionType,
    ExpressionData: expressionData,
    ...options,
  }
}

/**
 * 验证元素类型
 */
export function isValidElementType(element: any): element is DocumentElement {
  const validTypes = [
    'XTextInputFieldElement',
    'XTextRadioBoxElement',
    'XTextCheckBoxElement',
    'XTextLabelElement',
    'XTextNewBarcodeElement',
    'XTextTDBarcodeElement',
    'XTextPageBreakElement',
    'XTextImageElement',
    'XTextButtonElement',
    'XTextHorizontalLineElement',
    'XTextPageInfoElement',
    'XTextMediaElement',
    'XTextNewMedicalExpressionElement',
  ]

  return (
    element &&
    typeof element === 'object' &&
    'ElementType' in element &&
    validTypes.includes(element.ElementType)
  )
}

/**
 * 获取元素类型名称
 */
export function getElementType(element: DocumentElement): string {
  return element.ElementType || 'Unknown'
}

/**
 * 检查是否为输入域元素
 */
export function isInputFieldElement(element: DocumentElement): element is XTextInputFieldElement {
  return element.ElementType === 'XTextInputFieldElement'
}

/**
 * 检查是否为医学表达式元素
 */
export function isMedicalExpressionElement(
  element: DocumentElement,
): element is XTextNewMedicalExpressionElement {
  return element.ElementType === 'XTextNewMedicalExpressionElement'
}

/**
 * 获取输入域样式
 */
export function getInputFieldStyle(element: XTextInputFieldElement): InnerEditStyle {
  return element.InnerEditStyle || 'Text'
}

/**
 * 检查输入域是否为下拉列表
 */
export function isDropdownInput(element: XTextInputFieldElement): boolean {
  return element.InnerEditStyle === 'DropdownList'
}

/**
 * 检查输入域是否为动态下拉列表
 */
export function isDynamicDropdown(element: XTextInputFieldElement): boolean {
  return element.InnerEditStyle === 'DropdownList' && element.DynamicListItems === true
}
