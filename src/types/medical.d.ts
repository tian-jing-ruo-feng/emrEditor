// 医学表达式类型定义

// 月经史相关类型
export interface MenstrualHistoryData {
  /** 月经周期天数 */
  CycleDays?: number
  /** 月经持续时间 */
  Duration?: number
  /** 上次月经日期 */
  LastPeriodDate?: string
  /** 月经史描述 */
  Description?: string
  /** 是否规律 */
  IsRegular?: boolean
}

// 瞳孔图相关类型
export interface PupilDiagramData {
  /** 左眼瞳孔直径 */
  LeftPupilDiameter?: number
  /** 右眼瞳孔直径 */
  RightPupilDiameter?: number
  /** 瞳孔反应 */
  PupilReaction?: 'Normal' | 'Sluggish' | 'Fixed'
  /** 瞳孔形状 */
  PupilShape?: 'Round' | 'Oval' | 'Irregular'
  /** 备注 */
  Notes?: string
}

// 光定位图相关类型
export interface LightPositioningData {
  /** 光定位测试结果 */
  LightPositioning?: {
    /** 上方 */
    Superior?: boolean
    /** 下方 */
    Inferior?: boolean
    /** 鼻侧 */
    Nasal?: boolean
    /** 颞侧 */
    Temporal?: boolean
  }
  /** 测试眼别 */
  TestEye?: 'Left' | 'Right' | 'Both'
  /** 测试距离 */
  TestDistance?: number
}

// 眼球突出度图相关类型
export interface ExophthalmosData {
  /** 左眼突出度 */
  LeftExophthalmos?: number
  /** 右眼突出度 */
  RightExophthalmos?: number
  /** 测量方法 */
  MeasurementMethod?: 'Hertel' | 'Luedde' | 'Other'
  /** 正常范围 */
  NormalRange?: {
    Min: number
    Max: number
  }
}

// 斜视符号图相关类型
export interface StrabismusSymbolData {
  /** 斜视类型 */
  StrabismusType?: 'Esotropia' | 'Exotropia' | 'Hypertropia' | 'Hypotropia'
  /** 斜视角度 */
  StrabismusAngle?: number
  /** 斜视眼别 */
  StrabismusEye?: 'Left' | 'Right' | 'Alternating'
  /** 斜视方向 */
  StrabismusDirection?: 'Inward' | 'Outward' | 'Upward' | 'Downward'
}

// 胎心图相关类型
export interface FetalHeartRateData {
  /** 胎心率 */
  HeartRate?: number
  /** 测量时间 */
  MeasurementTime?: string
  /** 胎心率变化 */
  HeartRateVariability?: 'Normal' | 'Reduced' | 'Absent'
  /** 加速次数 */
  Accelerations?: number
  /** 减速次数 */
  Decelerations?: number
  /** 基线 */
  Baseline?: number
}

// 疼痛指数图相关类型
export interface PainIndexData {
  /** 疼痛评分 */
  PainScore?: number
  /** 疼痛类型 */
  PainType?: 'Sharp' | 'Dull' | 'Throbbing' | 'Burning' | 'Cramping'
  /** 疼痛位置 */
  PainLocation?: string
  /** 疼痛持续时间 */
  PainDuration?: string
  /** 疼痛强度描述 */
  PainIntensity?: 'Mild' | 'Moderate' | 'Severe'
}

// 分数公式相关类型
export interface FractionFormulaData {
  /** 分子 */
  Numerator?: number
  /** 分母 */
  Denominator?: number
  /** 分数值 */
  FractionValue?: number
  /** 分数类型 */
  FractionType?: 'Proper' | 'Improper' | 'Mixed'
  /** 显示格式 */
  DisplayFormat?: 'Fraction' | 'Decimal' | 'Percentage'
}

// 牙位图基础类型
export interface ToothPosition {
  /** 牙齿编号 */
  ToothNumber: number
  /** 牙齿状态 */
  Status?: 'Normal' | 'Caries' | 'Missing' | 'Filled' | 'Crown' | 'Bridge' | 'Implant'
  /** 牙齿颜色 */
  Color?: string
  /** 备注 */
  Notes?: string
}

// 恒牙牙位图相关类型
export interface PermanentTeethData {
  /** 上颌牙齿 */
  UpperTeeth?: ToothPosition[]
  /** 下颌牙齿 */
  LowerTeeth?: ToothPosition[]
  /** 牙齿总数 */
  TotalTeeth?: number
  /** 缺失牙齿数 */
  MissingTeeth?: number
}

// 乳牙牙位图相关类型
export interface DeciduousTeethData {
  /** 上颌乳牙 */
  UpperTeeth?: ToothPosition[]
  /** 下颌乳牙 */
  LowerTeeth?: ToothPosition[]
  /** 乳牙总数 */
  TotalTeeth?: number
  /** 脱落牙齿数 */
  ShedTeeth?: number
}

// PD牙位图相关类型
export interface PDTeethData {
  /** 牙齿PD值 */
  TeethPD?: Array<{
    ToothNumber: number
    PDValue: number
    Position: 'Mesial' | 'Distal' | 'Buccal' | 'Lingual'
  }>
  /** 平均PD值 */
  AveragePD?: number
  /** 最大PD值 */
  MaxPD?: number
}

// 病变牙位图相关类型
export interface LesionTeethData {
  /** 病变牙齿 */
  LesionTeeth?: Array<{
    ToothNumber: number
    LesionType: 'Caries' | 'Fracture' | 'Abscess' | 'Periodontitis'
    LesionSeverity: 'Mild' | 'Moderate' | 'Severe'
    LesionLocation: string
  }>
  /** 病变总数 */
  TotalLesions?: number
}

// 电活力测试牙位图相关类型
export interface ElectricVitalityTestData {
  /** 测试结果 */
  TestResults?: Array<{
    ToothNumber: number
    VitalityResponse: 'Normal' | 'Reduced' | 'Absent'
    TestValue?: number
    TestUnit?: string
  }>
  /** 测试方法 */
  TestMethod?: string
  /** 测试时间 */
  TestTime?: string
}

// 固定桥牙位图相关类型
export interface FixedBridgeData {
  /** 桥体信息 */
  Bridges?: Array<{
    /** 桥体编号 */
    BridgeNumber: number
    /** 桥体牙齿 */
    BridgeTeeth: number[]
    /** 桥体类型 */
    BridgeType: 'Porcelain' | 'Metal' | 'PorcelainFusedToMetal'
    /** 桥体状态 */
    BridgeStatus: 'Good' | 'Fair' | 'Poor'
  }>
  /** 桥体总数 */
  TotalBridges?: number
}

// 复合牙位图/替牙列相关类型
export interface CompositeTeethData {
  /** 混合牙列状态 */
  MixedDentition?: {
    /** 恒牙数量 */
    PermanentTeethCount: number
    /** 乳牙数量 */
    DeciduousTeethCount: number
    /** 替牙状态 */
    ReplacementStatus: 'Normal' | 'Delayed' | 'Early'
  }
  /** 牙齿排列 */
  ToothAlignment?: 'Normal' | 'Crowded' | 'Spaced' | 'Malocclusion'
  /** 咬合关系 */
  Occlusion?: 'ClassI' | 'ClassII' | 'ClassIII'
}

// 医学表达式数据联合类型
export type MedicalExpressionData =
  | MenstrualHistoryData
  | PupilDiagramData
  | LightPositioningData
  | ExophthalmosData
  | StrabismusSymbolData
  | FetalHeartRateData
  | PainIndexData
  | FractionFormulaData
  | PermanentTeethData
  | DeciduousTeethData
  | PDTeethData
  | LesionTeethData
  | ElectricVitalityTestData
  | FixedBridgeData
  | CompositeTeethData

// 医学表达式类型枚举
export enum MedicalExpressionType {
  MenstrualHistory = 'MenstrualHistory',
  PupilDiagram = 'PupilDiagram',
  LightPositioning = 'LightPositioning',
  Exophthalmos = 'Exophthalmos',
  StrabismusSymbol = 'StrabismusSymbol',
  FetalHeartRate = 'FetalHeartRate',
  PainIndex = 'PainIndex',
  FractionFormula = 'FractionFormula',
  PermanentTeeth = 'PermanentTeeth',
  DeciduousTeeth = 'DeciduousTeeth',
  PDTeeth = 'PDTeeth',
  LesionUpperTeeth = 'LesionUpperTeeth',
  LesionLowerTeeth = 'LesionLowerTeeth',
  ElectricVitalityTest = 'ElectricVitalityTest',
  FixedBridge = 'FixedBridge',
  CompositeTeeth = 'CompositeTeeth',
}
