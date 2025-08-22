export const emergencyDoc = `

<XTextDocument xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" EditorVersionString="1.0.0.0">
   <XElements>
      <Element xsi:type="XTextHeader">
         <AcceptTab>true</AcceptTab>
         <XElements>
            <Element xsi:type="XString" StyleIndex="1">
               <Text>XX市第一中心医院</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="2" />
            <Element xsi:type="XParagraphFlag" StyleIndex="3" />
            <Element xsi:type="XString" StyleIndex="5">
               <Text>科室：急症科	病历号：</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="6">
               <Text>20251027-EM-0156	就诊日期：2025年3月21日	就诊时间：22:48</Text>
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="4" />
         </XElements>
      </Element>
      <Element xsi:type="XTextBody">
         <AcceptTab>true</AcceptTab>
         <XElements>
            <Element xsi:type="XString" StyleIndex="10">
               <Text>基本信息</Text>
            </Element>
            <Element xsi:type="XLineBreak" />
            <Element xsi:type="XString">
               <Text>	</Text>
            </Element>
            <Element xsi:type="XTextTable" NumOfRows="3" NumOfColumns="4">
               <ID>table1</ID>
               <XElements>
                  <Element xsi:type="XTextTableRow">
                     <XElements>
                        <Element xsi:type="XTextTableCell" StyleIndex="8">
                           <XElements>
                              <Element xsi:type="XString">
                                 <Text>姓名</Text>
                              </Element>
                              <Element xsi:type="XParagraphFlag" />
                           </XElements>
                        </Element>
                        <Element xsi:type="XTextTableCell" StyleIndex="8">
                           <XElements>
                              <Element xsi:type="XInputField" StyleIndex="29">
                                 <ID>userName</ID>
                                 <ToolTip>请输入姓名</ToolTip>
                                 <ValidateStyle>
                                    <MaxLength>50</MaxLength>
                                    <MinLength>1</MinLength>
                                    <CheckMaxValue>true</CheckMaxValue>
                                    <CheckMinValue>true</CheckMinValue>
                                    <DateTimeMaxValue>0001-01-01T00:00:00+08:00</DateTimeMaxValue>
                                    <DateTimeMinValue>0001-01-01T00:00:00+08:00</DateTimeMinValue>
                                 </ValidateStyle>
                                 <ValueBinding>
                                    <DataSource>userInfo</DataSource>
                                    <BindingPath>userName</BindingPath>
                                 </ValueBinding>
                                 <CopySource />
                                 <MoveFocusHotKey>None</MoveFocusHotKey>
                                 <Name>姓名</Name>
                                 <DisplayFormat />
                                 <EnableHighlight>Default</EnableHighlight>
                                 <EditorActiveMode>None</EditorActiveMode>
                                 <FieldSettings />
                              </Element>
                              <Element xsi:type="XParagraphFlag" />
                           </XElements>
                        </Element>
                        <Element xsi:type="XTextTableCell" StyleIndex="8">
                           <XElements>
                              <Element xsi:type="XString">
                                 <Text>性别</Text>
                              </Element>
                              <Element xsi:type="XParagraphFlag" />
                           </XElements>
                        </Element>
                        <Element xsi:type="XTextTableCell" StyleIndex="8">
                           <XElements>
                              <Element xsi:type="XInputField" StyleIndex="29">
                                 <ID>userSex</ID>
                                 <ToolTip>请选择性别</ToolTip>
                                 <ValidateStyle>
                                    <CheckMaxValue>true</CheckMaxValue>
                                    <CheckMinValue>true</CheckMinValue>
                                    <DateTimeMaxValue>0001-01-01T00:00:00+08:00</DateTimeMaxValue>
                                    <DateTimeMinValue>0001-01-01T00:00:00+08:00</DateTimeMinValue>
                                 </ValidateStyle>
                                 <ValueBinding>
                                    <DataSource>userInfo</DataSource>
                                    <BindingPath>userSex</BindingPath>
                                 </ValueBinding>
                                 <CopySource />
                                 <MoveFocusHotKey>None</MoveFocusHotKey>
                                 <Name>性别</Name>
                                 <DisplayFormat />
                                 <EnableHighlight>Default</EnableHighlight>
                                 <EditorActiveMode>Default Program F2 GotFocus MouseDblClick MouseClick MouseRightClick Enter</EditorActiveMode>
                                 <FieldSettings>
                                    <EditStyle>DropdownList</EditStyle>
                                    <DynamicListItems>true</DynamicListItems>
                                    <ListSource>
                                       <Items>
                                          <Item>
                                             <Text>男</Text>
                                             <Value>1</Value>
                                          </Item>
                                          <Item>
                                             <Text>女</Text>
                                             <Value>0</Value>
                                          </Item>
                                          <Item>
                                             <Text>未知</Text>
                                             <Value>-1</Value>
                                          </Item>
                                       </Items>
                                    </ListSource>
                                 </FieldSettings>
                              </Element>
                              <Element xsi:type="XParagraphFlag" />
                           </XElements>
                        </Element>
                     </XElements>
                  </Element>
                  <Element xsi:type="XTextTableRow">
                     <XElements>
                        <Element xsi:type="XTextTableCell" StyleIndex="8">
                           <XElements>
                              <Element xsi:type="XString">
                                 <Text>年龄</Text>
                              </Element>
                              <Element xsi:type="XParagraphFlag" />
                           </XElements>
                        </Element>
                        <Element xsi:type="XTextTableCell" StyleIndex="8">
                           <XElements>
                              <Element xsi:type="XInputField" StyleIndex="29">
                                 <ID>userAge</ID>
                                 <ToolTip>请输入年龄</ToolTip>
                                 <ValidateStyle>
                                    <ValueType>Integer</ValueType>
                                    <MaxValue>1000</MaxValue>
                                    <DateTimeMaxValue>0001-01-01T00:00:00+08:00</DateTimeMaxValue>
                                    <DateTimeMinValue>0001-01-01T00:00:00+08:00</DateTimeMinValue>
                                 </ValidateStyle>
                                 <ValueBinding>
                                    <DataSource>userInfo</DataSource>
                                    <BindingPath>userAge</BindingPath>
                                 </ValueBinding>
                                 <CopySource />
                                 <MoveFocusHotKey>None</MoveFocusHotKey>
                                 <Name>年龄</Name>
                                 <DisplayFormat />
                                 <EnableHighlight>Default</EnableHighlight>
                                 <EditorActiveMode>None</EditorActiveMode>
                                 <FieldSettings>
                                    <EditStyle>Numeric</EditStyle>
                                 </FieldSettings>
                              </Element>
                              <Element xsi:type="XParagraphFlag" />
                           </XElements>
                        </Element>
                        <Element xsi:type="XTextTableCell" StyleIndex="8">
                           <XElements>
                              <Element xsi:type="XString">
                                 <Text>民族</Text>
                              </Element>
                              <Element xsi:type="XParagraphFlag" />
                           </XElements>
                        </Element>
                        <Element xsi:type="XTextTableCell" StyleIndex="8">
                           <XElements>
                              <Element xsi:type="XParagraphFlag" />
                           </XElements>
                        </Element>
                     </XElements>
                  </Element>
                  <Element xsi:type="XTextTableRow">
                     <XElements>
                        <Element xsi:type="XTextTableCell" StyleIndex="8">
                           <XElements>
                              <Element xsi:type="XString">
                                 <Text>联系方式</Text>
                              </Element>
                              <Element xsi:type="XParagraphFlag" />
                           </XElements>
                        </Element>
                        <Element xsi:type="XTextTableCell" StyleIndex="8">
                           <XElements>
                              <Element xsi:type="XString">
                                 <Text>13800001111</Text>
                              </Element>
                              <Element xsi:type="XParagraphFlag" />
                           </XElements>
                        </Element>
                        <Element xsi:type="XTextTableCell" StyleIndex="8">
                           <XElements>
                              <Element xsi:type="XString">
                                 <Text>送达方式</Text>
                              </Element>
                              <Element xsi:type="XParagraphFlag" />
                           </XElements>
                        </Element>
                        <Element xsi:type="XTextTableCell" StyleIndex="8">
                           <XElements>
                              <Element xsi:type="XString">
                                 <Text>自行来院</Text>
                              </Element>
                              <Element xsi:type="XParagraphFlag" />
                           </XElements>
                        </Element>
                     </XElements>
                  </Element>
               </XElements>
               <Columns>
                  <Element xsi:type="XTextTableColumn">
                     <Width>296.687</Width>
                  </Element>
                  <Element xsi:type="XTextTableColumn">
                     <Width>640.687</Width>
                  </Element>
                  <Element xsi:type="XTextTableColumn">
                     <Width>277.687</Width>
                  </Element>
                  <Element xsi:type="XTextTableColumn">
                     <Width>659.687</Width>
                  </Element>
               </Columns>
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="7" />
            <Element xsi:type="XString" StyleIndex="11">
               <Text>主诉</Text>
            </Element>
            <Element xsi:type="XLineBreak" />
            <Element xsi:type="XString" StyleIndex="7">
               <Text>	</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="17">
               <Text>突发性胸骨后压榨性疼痛伴大汗、气短2小时。</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="12" />
            <Element xsi:type="XParagraphFlag" StyleIndex="7" />
            <Element xsi:type="XString" StyleIndex="11">
               <Text>现病史</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="10" />
            <Element xsi:type="XString" StyleIndex="11">
               <Text>	</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="9">
               <Text>患者于2小时前晚餐后休息时，无明显诱因突然感到胸骨中下段后方出现压榨性疼痛，范围约手掌大小，疼痛呈持续性，程度剧烈（自评8/10分），伴后背放射痛。同时伴有大量冷汗、呼吸困难、恶心，无呕吐、无晕厥。</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="12" />
            <Element xsi:type="XLineBreak" StyleIndex="12" />
            <Element xsi:type="XString" StyleIndex="9">
               <Text>	症状持续不缓解，为求进一步诊治，遂由家属陪同自行来我院急诊。途中曾舌下含服“速效救心丸”5粒，效果不佳。</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="12" />
            <Element xsi:type="XString" StyleIndex="12">
               <Text>	</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="12" />
            <Element xsi:type="XString" StyleIndex="12">
               <Text>	</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="15">
               <Text>既往史：</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="13" />
            <Element xsi:type="XString" StyleIndex="13">
               <Text>	* </Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="14">
               <Text>高血压病史</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="9">
               <Text>10余年，最高血压达160/100mmHg，平日口服“硝苯地平控释片”，血压控制情况不详。</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="12" />
            <Element xsi:type="XString" StyleIndex="9">
               <Text>	</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="19">
               <Text>*</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="9">
               <Text> </Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="14">
               <Text>2型糖尿病史</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="9">
               <Text>5年，口服“二甲双胍”，血糖控制情况不详。</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="12" />
            <Element xsi:type="XString" StyleIndex="12">
               <Text>	</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="13">
               <Text>*</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="12">
               <Text> </Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="9">
               <Text>否认“冠心病”明确诊断史。</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="12" />
            <Element xsi:type="XString" StyleIndex="9">
               <Text>	</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="19">
               <Text>*</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="9">
               <Text> 否认药物、食物过敏史。</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="12" />
            <Element xsi:type="XString" StyleIndex="9">
               <Text>	</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="12" />
            <Element xsi:type="XString" StyleIndex="16">
               <Text>	</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="14">
               <Text>个人史及家族史：</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="15" />
            <Element xsi:type="XString" StyleIndex="14">
               <Text>	</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="9">
               <Text>吸烟20余年，每日约20支。饮酒史10余年，每日饮白酒约2两。其父有冠心病史。</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="12" />
            <Element xsi:type="XParagraphFlag" StyleIndex="7" />
            <Element xsi:type="XString" StyleIndex="11">
               <Text>体格检查</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="10" />
            <Element xsi:type="XString" StyleIndex="11">
               <Text>	</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="20">
               <Text>* T: </Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="16">
               <Text>36.8℃</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="21" />
            <Element xsi:type="XString" StyleIndex="16">
               <Text>	</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="20">
               <Text>* </Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="14">
               <Text>P：</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="16">
               <Text>108次/分，律齐</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="22" />
            <Element xsi:type="XString" StyleIndex="23">
               <Text>	</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="20">
               <Text>* </Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="14">
               <Text>R：</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="16">
               <Text>24次/分</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="22" />
            <Element xsi:type="XString" StyleIndex="22">
               <Text>	</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="20">
               <Text>* BP: </Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="16">
               <Text>168/102 mmHg（左臂）</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="22" />
            <Element xsi:type="XString" StyleIndex="22">
               <Text>	</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="20">
               <Text>* </Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="14">
               <Text>SpO2：</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="16">
               <Text>94% (未吸氧状态下）</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="22" />
            <Element xsi:type="XString" StyleIndex="22">
               <Text>	</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="20">
               <Text>* </Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="14">
               <Text>一般情况：</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="16">
               <Text>神志清楚，表情痛苦，面色苍白，大汗淋漓，急性病容。</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="22" />
            <Element xsi:type="XString" StyleIndex="22">
               <Text>	</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="20">
               <Text>* </Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="14">
               <Text>胸部：</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="16">
               <Text>双肺呼吸音粗，未闻及明显干湿性啰音。</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="21" />
            <Element xsi:type="XString" StyleIndex="16">
               <Text>	</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="14">
               <Text>* 心脏：</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="16">
               <Text>心界不大，心率108次/分，律齐，各瓣膜听诊区未闻及病理性杂音。</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="21" />
            <Element xsi:type="XString" StyleIndex="16">
               <Text>	</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="14">
               <Text>* 腹部：</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="16">
               <Text>腹软，无压痛、反跳痛。</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="21" />
            <Element xsi:type="XString" StyleIndex="21">
               <Text>	</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="15">
               <Text>* </Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="14">
               <Text>神经系统：</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="16">
               <Text>生理反射存在，病理征未引出。</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="18" />
            <Element xsi:type="XLineBreak" StyleIndex="18" />
            <Element xsi:type="XParagraphFlag" StyleIndex="7" />
            <Element xsi:type="XString" StyleIndex="11">
               <Text>辅助检查</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="10" />
            <Element xsi:type="XString" StyleIndex="11">
               <Text>	</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="20">
               <Text>1.</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="14">
               <Text>心电图：</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="16">
               <Text>窦性心动过速。V2-V5导联ST段弓背向上抬高0.2-0.4mV。提示：急性前壁心肌梗死。</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="24" />
            <Element xsi:type="XString" StyleIndex="20">
               <Text>	2.</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="14">
               <Text>急诊心梗三项：</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="15" />
            <Element xsi:type="XString" StyleIndex="14">
               <Text>		* </Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="16">
               <Text>肌钙蛋白I (cTnI)： 阳性</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="21" />
            <Element xsi:type="XString" StyleIndex="16">
               <Text>		</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="14">
               <Text>* </Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="16">
               <Text>肌酸激酶同工酶 (CK-MB)： 升高</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="21" />
            <Element xsi:type="XString" StyleIndex="16">
               <Text>		</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="14">
               <Text>*</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="16">
               <Text> 肌红蛋白 (Myo)： 升高</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="14">
               <Text> </Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="24" />
            <Element xsi:type="XString" StyleIndex="20">
               <Text>	3.</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="14">
               <Text>床旁心脏超声：</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="16">
               <Text>左室前壁节段性室壁运动异常，左心功能减低（EF值约45%）。</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="24" />
            <Element xsi:type="XString" StyleIndex="20">
               <Text>	4.</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="14">
               <Text>血气分析：</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="16">
               <Text>轻微低氧血症。</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="24" />
            <Element xsi:type="XString" StyleIndex="20">
               <Text>	5.</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="14">
               <Text>血常规：</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="21">
               <Text> </Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="16">
               <Text>WBC 11.5×10⁹/L，NEUT% 85%。</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="24" />
            <Element xsi:type="XString" StyleIndex="20">
               <Text>	6.</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="14">
               <Text>电解质、肾功能：</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="21">
               <Text> </Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="16">
               <Text>大致正常。</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="10" />
            <Element xsi:type="XParagraphFlag" StyleIndex="7" />
            <Element xsi:type="XString" StyleIndex="20">
               <Text>初步诊断</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="24" />
            <Element xsi:type="XString" StyleIndex="20">
               <Text>	1.</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="14">
               <Text>急性ST段抬高型心肌梗死（前壁）</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="24" />
            <Element xsi:type="XString" StyleIndex="20">
               <Text>	2.</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="14">
               <Text>心功能不全（Killip II级</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="25">
               <Text>）</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="24" />
            <Element xsi:type="XString" StyleIndex="20">
               <Text>	3.</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="14">
               <Text>高血压病3级（很高危）</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="24" />
            <Element xsi:type="XString" StyleIndex="20">
               <Text>	4.</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="14">
               <Text>2型糖尿</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="22" />
            <Element xsi:type="XParagraphFlag" StyleIndex="7" />
            <Element xsi:type="XString" StyleIndex="20">
               <Text>处理措施</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="24" />
            <Element xsi:type="XString" StyleIndex="20">
               <Text>	1.紧急处理：</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="24" />
            <Element xsi:type="XString" StyleIndex="20">
               <Text>		* </Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="16">
               <Text>立即绝对卧床休息，吸氧（5L/min），心电、血压、血氧饱和度监测。</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="21" />
            <Element xsi:type="XString" StyleIndex="16">
               <Text>		</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="14">
               <Text>*</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="16">
               <Text> 建立两条静脉通路。</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="21" />
            <Element xsi:type="XString" StyleIndex="16">
               <Text>		</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="14">
               <Text>*</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="16">
               <Text> 紧急给予“阿司匹林肠溶片300mg”嚼服，“替格瑞洛180mg”口服。</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="21" />
            <Element xsi:type="XString" StyleIndex="16">
               <Text>		</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="14">
               <Text>*</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="16">
               <Text> 吗啡3mg静脉注射镇痛。</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="21" />
            <Element xsi:type="XString" StyleIndex="16">
               <Text>	</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="14">
               <Text>2</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="20">
               <Text>.</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="14">
               <Text>再灌注治疗</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="20">
               <Text>：</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="24" />
            <Element xsi:type="XString" StyleIndex="20">
               <Text>		* </Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="16">
               <Text>立即启动绿色通道，联系心内科导管室</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="23">
               <Text>。</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="22" />
            <Element xsi:type="XString" StyleIndex="23">
               <Text>		</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="25">
               <Text>*</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="23">
               <Text> </Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="16">
               <Text>向患者及家属告知病情危重性及急诊PCI（经皮冠状动脉介入治疗）的必要性和风险，家属表示理解并签署手术知情同意书</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="23">
               <Text>。</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="22" />
            <Element xsi:type="XString" StyleIndex="23">
               <Text>		</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="25">
               <Text>*</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="23">
               <Text> </Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="16">
               <Text>拟急诊行冠状动脉造影+必要时PCI术</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="23">
               <Text>。</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="22" />
            <Element xsi:type="XString" StyleIndex="23">
               <Text>	</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="25">
               <Text>3</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="20">
               <Text>.</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="14">
               <Text>药物治疗</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="20">
               <Text>：</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="24" />
            <Element xsi:type="XString" StyleIndex="20">
               <Text>		* </Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="16">
               <Text>硝酸甘油静脉泵入扩张冠状动脉、降压</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="23">
               <Text>。</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="22" />
            <Element xsi:type="XString" StyleIndex="23">
               <Text>		</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="25">
               <Text>*</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="23">
               <Text> </Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="16">
               <Text>依诺肝素皮下注射抗凝</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="23">
               <Text>。</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="10" />
            <Element xsi:type="XString" StyleIndex="11">
               <Text>	</Text>
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="11" />
            <Element xsi:type="XString" StyleIndex="11">
               <Text>医师签名</Text>
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="11" />
            <Element xsi:type="XString" StyleIndex="10">
               <Text>接诊医师：xxx</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="10" />
            <Element xsi:type="XString" StyleIndex="10">
               <Text>上级医师：xxx</Text>
            </Element>
            <Element xsi:type="XLineBreak" StyleIndex="10" />
            <Element xsi:type="XParagraphFlag" StyleIndex="26" />
            <Element xsi:type="HorizontalLine" StyleIndex="28">
               <ID>hr1</ID>
               <LineSize>0</LineSize>
            </Element>
            <Element xsi:type="XString" StyleIndex="26">
               <Text>附注：</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="16">
               <Text>患者已于23:50由医护人员护送，转入导管室行急诊PCI术。</Text>
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="27" />
         </XElements>
      </Element>
      <Element xsi:type="XTextFooter">
         <AcceptTab>true</AcceptTab>
         <XElements />
      </Element>
      <Element xsi:type="XTextHeaderForFirstPage">
         <AcceptTab>true</AcceptTab>
         <XElements>
            <Element xsi:type="XParagraphFlag" StyleIndex="0">
               <AutoCreate>true</AutoCreate>
            </Element>
         </XElements>
      </Element>
      <Element xsi:type="XTextFooterForFirstPage">
         <AcceptTab>true</AcceptTab>
         <XElements />
      </Element>
   </XElements>
   <ContentStyles>
      <Default xsi:type="DocumentContentStyle">
         <FontName>宋体</FontName>
         <FontSize>12</FontSize>
      </Default>
      <Styles>
         <Style Index="0">
            <FontName>宋体</FontName>
            <FontSize>12</FontSize>
            <Align>Center</Align>
         </Style>
         <Style Index="1">
            <BackgroundColor>#FFFFFF</BackgroundColor>
            <Color>#404040</Color>
            <FontName>宋体</FontName>
            <FontSize>16</FontSize>
         </Style>
         <Style Index="2">
            <Color>#404040</Color>
            <FontName>宋体</FontName>
            <FontSize>16</FontSize>
         </Style>
         <Style Index="3">
            <Color>#404040</Color>
            <FontName>宋体</FontName>
            <FontSize>16</FontSize>
            <Align>Center</Align>
         </Style>
         <Style Index="4">
            <FontName>宋体</FontName>
            <FontSize>12</FontSize>
         </Style>
         <Style Index="5">
            <FontName>宋体</FontName>
            <FontSize>11</FontSize>
         </Style>
         <Style Index="6">
            <BackgroundColor>#FFFFFF</BackgroundColor>
            <Color>#404040</Color>
            <FontName>宋体</FontName>
            <FontSize>11</FontSize>
         </Style>
         <Style Index="7">
            <FontName>宋体</FontName>
            <FontSize>12</FontSize>
            <ParagraphListStyle>ListNumberStyleSimpChinNum1</ParagraphListStyle>
         </Style>
         <Style Index="8">
            <FontName>宋体</FontName>
            <FontSize>12</FontSize>
            <BorderWidth>1</BorderWidth>
            <BorderLeft>true</BorderLeft>
            <BorderBottom>true</BorderBottom>
            <BorderTop>true</BorderTop>
            <BorderRight>true</BorderRight>
            <PaddingLeft>15</PaddingLeft>
            <PaddingTop>10</PaddingTop>
            <PaddingRight>15</PaddingRight>
            <PaddingBottom>10</PaddingBottom>
         </Style>
         <Style Index="9">
            <BackgroundColor>#FFFFFF</BackgroundColor>
            <Color>#404040</Color>
            <FontName>宋体</FontName>
            <FontSize>12.001</FontSize>
         </Style>
         <Style Index="10">
            <FontName>宋体</FontName>
            <FontSize>12</FontSize>
            <Bold>true</Bold>
         </Style>
         <Style Index="11">
            <FontName>宋体</FontName>
            <FontSize>12</FontSize>
            <Bold>true</Bold>
            <ParagraphListStyle>ListNumberStyleSimpChinNum1</ParagraphListStyle>
         </Style>
         <Style Index="12">
            <Color>#404040</Color>
            <FontName>宋体</FontName>
            <FontSize>12.001</FontSize>
         </Style>
         <Style Index="13">
            <Color>#404040</Color>
            <FontName>宋体</FontName>
            <FontSize>12.001</FontSize>
            <Bold>true</Bold>
         </Style>
         <Style Index="14">
            <BackgroundColor>#FFFFFF</BackgroundColor>
            <Color>#010002</Color>
            <FontName>宋体</FontName>
            <FontSize>12.001</FontSize>
            <Bold>true</Bold>
         </Style>
         <Style Index="15">
            <Color>#010002</Color>
            <FontName>宋体</FontName>
            <FontSize>12.001</FontSize>
            <Bold>true</Bold>
         </Style>
         <Style Index="16">
            <BackgroundColor>#FFFFFF</BackgroundColor>
            <Color>#010002</Color>
            <FontName>宋体</FontName>
            <FontSize>12.001</FontSize>
         </Style>
         <Style Index="17">
            <BackgroundColor>#FFFFFF</BackgroundColor>
            <Color>#404040</Color>
            <FontName>宋体</FontName>
            <FontSize>12</FontSize>
         </Style>
         <Style Index="18">
            <Color>#404040</Color>
            <FontName>宋体</FontName>
            <FontSize>12.001</FontSize>
         </Style>
         <Style Index="19">
            <BackgroundColor>#FFFFFF</BackgroundColor>
            <Color>#404040</Color>
            <FontName>宋体</FontName>
            <FontSize>12.001</FontSize>
            <Bold>true</Bold>
         </Style>
         <Style Index="20">
            <Color>#010002</Color>
            <FontName>宋体</FontName>
            <FontSize>12</FontSize>
            <Bold>true</Bold>
            <ParagraphListStyle>ListNumberStyleSimpChinNum1</ParagraphListStyle>
         </Style>
         <Style Index="21">
            <Color>#010002</Color>
            <FontName>宋体</FontName>
            <FontSize>12.001</FontSize>
         </Style>
         <Style Index="22">
            <Color>#010002</Color>
            <FontName>宋体</FontName>
            <FontSize>12.001</FontSize>
         </Style>
         <Style Index="23">
            <BackgroundColor>#FFFFFF</BackgroundColor>
            <Color>#010002</Color>
            <FontName>宋体</FontName>
            <FontSize>12.001</FontSize>
         </Style>
         <Style Index="24">
            <Color>#010002</Color>
            <FontName>宋体</FontName>
            <FontSize>12</FontSize>
            <Bold>true</Bold>
         </Style>
         <Style Index="25">
            <BackgroundColor>#FFFFFF</BackgroundColor>
            <Color>#010002</Color>
            <FontName>宋体</FontName>
            <FontSize>12.001</FontSize>
            <Bold>true</Bold>
         </Style>
         <Style Index="26">
            <FontName>宋体</FontName>
            <FontSize>12</FontSize>
            <Bold>true</Bold>
            <Align>Right</Align>
            <FirstLineIndent>100</FirstLineIndent>
         </Style>
         <Style Index="27">
            <FontName>宋体</FontName>
            <FontSize>12</FontSize>
            <Bold>true</Bold>
            <FirstLineIndent>100</FirstLineIndent>
         </Style>
         <Style Index="28">
            <FontName>宋体</FontName>
            <FontSize>12</FontSize>
            <Bold>true</Bold>
            <Align>Right</Align>
            <FirstLineIndent>100</FirstLineIndent>
         </Style>
         <Style Index="29">
            <FontName>宋体</FontName>
            <FontSize>12</FontSize>
         </Style>
      </Styles>
   </ContentStyles>
   <DocumentContentVersion>3722</DocumentContentVersion>
   <Info>
      <CreationTime>1980-01-01T00:00:00+08:00</CreationTime>
      <LastModifiedTime>2025-08-22T10:43:37+08:00</LastModifiedTime>
      <LastPrintTime>1980-01-01T00:00:00+08:00</LastPrintTime>
      <Operator>DCSoft.Writer Version:1.0.0.0</Operator>
      <NumOfPage>2</NumOfPage>
   </Info>
   <BodyText>基本信息
	
姓名   性别   
年龄   民族   
联系方式 13800001111 送达方式 自行来院 
主诉
	突发性胸骨后压榨性疼痛伴大汗、气短2小时。

现病史
	患者于2小时前晚餐后休息时，无明显诱因突然感到胸骨中下段后方出现压榨性疼痛，范围约手掌大小，疼痛呈持续性，程度剧烈（自评8/10分），伴后背放射痛。同时伴有大量冷汗、呼吸困难、恶心，无呕吐、无晕厥。

	症状持续不缓解，为求进一步诊治，遂由家属陪同自行来我院急诊。途中曾舌下含服“速效救心丸”5粒，效果不佳。
	
	既往史：
	* 高血压病史10余年，最高血压达160/100mmHg，平日口服“硝苯地平控释片”，血压控制情况不详。
	* 2型糖尿病史5年，口服“二甲双胍”，血糖控制情况不详。
	* 否认“冠心病”明确诊断史。
	* 否认药物、食物过敏史。
	
	个人史及家族史：
	吸烟20余年，每日约20支。饮酒史10余年，每日饮白酒约2两。其父有冠心病史。

体格检查
	* T: 36.8℃
	* P：108次/分，律齐
	* R：24次/分
	* BP: 168/102 mmHg（左臂）
	* SpO2：94% (未吸氧状态下）
	* 一般情况：神志清楚，表情痛苦，面色苍白，大汗淋漓，急性病容。
	* 胸部：双肺呼吸音粗，未闻及明显干湿性啰音。
	* 心脏：心界不大，心率108次/分，律齐，各瓣膜听诊区未闻及病理性杂音。
	* 腹部：腹软，无压痛、反跳痛。
	* 神经系统：生理反射存在，病理征未引出。


辅助检查
	1.心电图：窦性心动过速。V2-V5导联ST段弓背向上抬高0.2-0.4mV。提示：急性前壁心肌梗死。
	2.急诊心梗三项：
		* 肌钙蛋白I (cTnI)： 阳性
		* 肌酸激酶同工酶 (CK-MB)： 升高
		* 肌红蛋白 (Myo)： 升高 
	3.床旁心脏超声：左室前壁节段性室壁运动异常，左心功能减低（EF值约45%）。
	4.血气分析：轻微低氧血症。
	5.血常规： WBC 11.5×10⁹/L，NEUT% 85%。
	6.电解质、肾功能： 大致正常。

初步诊断
	1.急性ST段抬高型心肌梗死（前壁）
	2.心功能不全（Killip II级）
	3.高血压病3级（很高危）
	4.2型糖尿

处理措施
	1.紧急处理：
		* 立即绝对卧床休息，吸氧（5L/min），心电、血压、血氧饱和度监测。
		* 建立两条静脉通路。
		* 紧急给予“阿司匹林肠溶片300mg”嚼服，“替格瑞洛180mg”口服。
		* 吗啡3mg静脉注射镇痛。
	2.再灌注治疗：
		* 立即启动绿色通道，联系心内科导管室。
		* 向患者及家属告知病情危重性及急诊PCI（经皮冠状动脉介入治疗）的必要性和风险，家属表示理解并签署手术知情同意书。
		* 拟急诊行冠状动脉造影+必要时PCI术。
	3.药物治疗：
		* 硝酸甘油静脉泵入扩张冠状动脉、降压。
		* 依诺肝素皮下注射抗凝。
	
医师签名
接诊医师：xxx
上级医师：xxx

附注：患者已于23:50由医护人员护送，转入导管室行急诊PCI术。</BodyText>
   <PageSettings />
</XTextDocument>
`