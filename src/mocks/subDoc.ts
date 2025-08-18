export const subDoc = `
<XTextDocument xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" EditorVersionString="1.0.0.0">
   <XElements>
      <Element xsi:type="XTextHeader">
         <AcceptTab>true</AcceptTab>
         <XElements>
            <Element xsi:type="XParagraphFlag" StyleIndex="0">
               <AutoCreate>true</AutoCreate>
            </Element>
         </XElements>
      </Element>
      <Element xsi:type="XTextBody">
         <AcceptTab>true</AcceptTab>
         <XElements>
            <Element xsi:type="XInputField" StyleIndex="1">
               <ID>5</ID>
               <XElements>
                  <Element xsi:type="XString" StyleIndex="1">
                     <Text>2015年10月15日 10时25分</Text>
                  </Element>
               </XElements>
               <Name>记录时间</Name>
               <DisplayFormat>
                  <Style>DateTime</Style>
                  <Format>yyyy年MM月dd日 HH时mm分</Format>
               </DisplayFormat>
               <InnerValue>2015年10月15日 10时25分</InnerValue>
               <BackgroundText>记录时间</BackgroundText>
               <FieldSettings>
                  <EditStyle>DateTime</EditStyle>
               </FieldSettings>
            </Element>
            <Element xsi:type="XString" StyleIndex="1">
               <Text>         </Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="2">
               <Text>转入记录</Text>
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="1" />
            <Element xsi:type="XTextTable" StyleIndex="3" NumOfRows="4" NumOfColumns="5">
               <ID>table1</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <XElements>
                  <Element xsi:type="XTextTableRow" StyleIndex="3">
                     <EnableValueValidate>true</EnableValueValidate>
                     <XElements>
                        <Element xsi:type="XTextTableCell" StyleIndex="4">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements>
                              <Element xsi:type="XString" StyleIndex="5">
                                 <Text>入院时间：</Text>
                              </Element>
                              <Element xsi:type="XParagraphFlag" StyleIndex="5" />
                           </XElements>
                        </Element>
                        <Element xsi:type="XTextTableCell" StyleIndex="4">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements>
                              <Element xsi:type="XInputField" StyleIndex="1">
                                 <ID>4</ID>
                                 <ValueBinding>
                                    <DataSource>PATIENT</DataSource>
                                    <BindingPath>入院日期</BindingPath>
                                 </ValueBinding>
                                 <XElements>
                                    <Element xsi:type="XString" StyleIndex="1">
                                       <Text>2015年01月14日 11时34分</Text>
                                    </Element>
                                 </XElements>
                                 <Name>入院日期</Name>
                                 <DisplayFormat>
                                    <Style>DateTime</Style>
                                    <Format>yyyy年MM月dd日 HH时mm分</Format>
                                 </DisplayFormat>
                                 <InnerValue>2015年01月14日 11时34分</InnerValue>
                                 <BackgroundText>入院日期</BackgroundText>
                                 <FieldSettings>
                                    <EditStyle>DateTime</EditStyle>
                                 </FieldSettings>
                              </Element>
                              <Element xsi:type="XString" StyleIndex="1">
                                 <Text> </Text>
                              </Element>
                              <Element xsi:type="XParagraphFlag" StyleIndex="5" />
                           </XElements>
                           <ColSpan>2</ColSpan>
                        </Element>
                        <Element xsi:type="XTextTableCell" StyleIndex="6" C="1">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements>
                              <Element xsi:type="XParagraphFlag" StyleIndex="5" />
                           </XElements>
                        </Element>
                        <Element xsi:type="XTextTableCell" StyleIndex="4">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements>
                              <Element xsi:type="XString" StyleIndex="5">
                                 <Text>转出时间：</Text>
                              </Element>
                              <Element xsi:type="XParagraphFlag" StyleIndex="5" />
                           </XElements>
                        </Element>
                        <Element xsi:type="XTextTableCell" StyleIndex="4">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements>
                              <Element xsi:type="XString" StyleIndex="1">
                                 <Text>2015年10月15日 10时26分</Text>
                              </Element>
                              <Element xsi:type="XParagraphFlag" StyleIndex="5" />
                           </XElements>
                        </Element>
                     </XElements>
                  </Element>
                  <Element xsi:type="XTextTableRow" StyleIndex="3">
                     <EnableValueValidate>true</EnableValueValidate>
                     <XElements>
                        <Element xsi:type="XTextTableCell" StyleIndex="4">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements>
                              <Element xsi:type="XString" StyleIndex="5">
                                 <Text>姓名：</Text>
                              </Element>
                              <Element xsi:type="XInputField" StyleIndex="5">
                                 <ID>7</ID>
                                 <ValueBinding>
                                    <DataSource>PATIENT</DataSource>
                                    <BindingPath>病患姓名</BindingPath>
                                 </ValueBinding>
                                 <XElements>
                                    <Element xsi:type="XString" StyleIndex="5">
                                       <Text>刘玥</Text>
                                    </Element>
                                 </XElements>
                                 <Name>病患姓名</Name>
                                 <InnerValue>刘玥</InnerValue>
                                 <BackgroundText>病患姓名</BackgroundText>
                              </Element>
                              <Element xsi:type="XParagraphFlag" StyleIndex="5" />
                           </XElements>
                           <ColSpan>2</ColSpan>
                        </Element>
                        <Element xsi:type="XTextTableCell" StyleIndex="4" C="1">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements>
                              <Element xsi:type="XParagraphFlag" StyleIndex="3" />
                           </XElements>
                        </Element>
                        <Element xsi:type="XTextTableCell" StyleIndex="4">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements>
                              <Element xsi:type="XString" StyleIndex="5">
                                 <Text>性别：</Text>
                              </Element>
                              <Element xsi:type="XInputField" StyleIndex="5">
                                 <ID>3</ID>
                                 <ValueBinding>
                                    <DataSource>PATIENT</DataSource>
                                    <BindingPath>病患性别</BindingPath>
                                 </ValueBinding>
                                 <XElements>
                                    <Element xsi:type="XString" StyleIndex="5">
                                       <Text>女</Text>
                                    </Element>
                                 </XElements>
                                 <Name>病患性别</Name>
                                 <InnerValue>女</InnerValue>
                                 <BackgroundText>病患性别</BackgroundText>
                                 <FieldSettings>
                                    <EditStyle>DropdownList</EditStyle>
                                    <DynamicListItems>true</DynamicListItems>
                                 </FieldSettings>
                              </Element>
                              <Element xsi:type="XParagraphFlag" StyleIndex="5" />
                           </XElements>
                           <ColSpan>2</ColSpan>
                        </Element>
                        <Element xsi:type="XTextTableCell" StyleIndex="4" C="1">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements>
                              <Element xsi:type="XParagraphFlag" StyleIndex="3" />
                           </XElements>
                        </Element>
                        <Element xsi:type="XTextTableCell" StyleIndex="4">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements>
                              <Element xsi:type="XString" StyleIndex="5">
                                 <Text>年龄：</Text>
                              </Element>
                              <Element xsi:type="XInputField" StyleIndex="5">
                                 <ID>25</ID>
                                 <ValueBinding>
                                    <DataSource>PATIENT</DataSource>
                                    <BindingPath>病患年龄</BindingPath>
                                 </ValueBinding>
                                 <XElements>
                                    <Element xsi:type="XString" StyleIndex="5">
                                       <Text>29岁4月</Text>
                                    </Element>
                                 </XElements>
                                 <Name>病患年龄</Name>
                                 <InnerValue>29岁4月</InnerValue>
                                 <BackgroundText>病患年龄</BackgroundText>
                              </Element>
                              <Element xsi:type="XParagraphFlag" StyleIndex="5" />
                           </XElements>
                        </Element>
                     </XElements>
                  </Element>
                  <Element xsi:type="XTextTableRow" StyleIndex="3">
                     <EnableValueValidate>true</EnableValueValidate>
                     <XElements>
                        <Element xsi:type="XTextTableCell" StyleIndex="4">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements>
                              <Element xsi:type="XString" StyleIndex="5">
                                 <Text>转出科室：</Text>
                              </Element>
                              <Element xsi:type="XParagraphFlag" StyleIndex="5" />
                           </XElements>
                        </Element>
                        <Element xsi:type="XTextTableCell" StyleIndex="4">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements>
                              <Element xsi:type="XInputField" StyleIndex="5">
                                 <ID>71</ID>
                                 <ValueBinding>
                                    <DataSource>PATIENT</DataSource>
                                    <BindingPath>转出科室</BindingPath>
                                 </ValueBinding>
                                 <XElements>
                                    <Element xsi:type="XString" StyleIndex="5">
                                       <Text>骨科</Text>
                                    </Element>
                                 </XElements>
                                 <Name>转出科室</Name>
                                 <InnerValue>骨科</InnerValue>
                                 <BackgroundText>转出科室</BackgroundText>
                              </Element>
                              <Element xsi:type="XParagraphFlag" StyleIndex="5" />
                           </XElements>
                           <ColSpan>2</ColSpan>
                        </Element>
                        <Element xsi:type="XTextTableCell" StyleIndex="6" C="1">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements>
                              <Element xsi:type="XParagraphFlag" StyleIndex="5" />
                           </XElements>
                        </Element>
                        <Element xsi:type="XTextTableCell" StyleIndex="4">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements>
                              <Element xsi:type="XString" StyleIndex="5">
                                 <Text>转入科室：</Text>
                              </Element>
                              <Element xsi:type="XParagraphFlag" StyleIndex="5" />
                           </XElements>
                        </Element>
                        <Element xsi:type="XTextTableCell" StyleIndex="4">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements>
                              <Element xsi:type="XInputField" StyleIndex="5">
                                 <ID>72</ID>
                                 <ValueBinding>
                                    <DataSource>PATIENT</DataSource>
                                    <BindingPath>转入科室</BindingPath>
                                 </ValueBinding>
                                 <XElements>
                                    <Element xsi:type="XString" StyleIndex="5">
                                       <Text>内科</Text>
                                    </Element>
                                 </XElements>
                                 <Name>转入科室</Name>
                                 <InnerValue>内科</InnerValue>
                                 <BackgroundText>转入科室</BackgroundText>
                              </Element>
                              <Element xsi:type="XParagraphFlag" StyleIndex="5" />
                           </XElements>
                        </Element>
                     </XElements>
                  </Element>
                  <Element xsi:type="XTextTableRow" StyleIndex="3">
                     <EnableValueValidate>true</EnableValueValidate>
                     <XElements>
                        <Element xsi:type="XTextTableCell" StyleIndex="4">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements>
                              <Element xsi:type="XString" StyleIndex="5">
                                 <Text>转出诊断：</Text>
                              </Element>
                              <Element xsi:type="XParagraphFlag" StyleIndex="5" />
                           </XElements>
                        </Element>
                        <Element xsi:type="XTextTableCell" StyleIndex="4">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements>
                              <Element xsi:type="XParagraphFlag" StyleIndex="5" />
                           </XElements>
                           <ColSpan>2</ColSpan>
                        </Element>
                        <Element xsi:type="XTextTableCell" StyleIndex="6" C="1">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements>
                              <Element xsi:type="XParagraphFlag" StyleIndex="5" />
                           </XElements>
                        </Element>
                        <Element xsi:type="XTextTableCell" StyleIndex="4">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements>
                              <Element xsi:type="XString" StyleIndex="5">
                                 <Text>转入诊断：</Text>
                              </Element>
                              <Element xsi:type="XParagraphFlag" StyleIndex="5" />
                           </XElements>
                        </Element>
                        <Element xsi:type="XTextTableCell" StyleIndex="4">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements>
                              <Element xsi:type="XParagraphFlag" StyleIndex="5" />
                           </XElements>
                        </Element>
                     </XElements>
                  </Element>
               </XElements>
               <AllowReBindingDataSource>true</AllowReBindingDataSource>
               <CompressOwnerLineSpacing>true</CompressOwnerLineSpacing>
               <Columns>
                  <Element xsi:type="XTextTableColumn">
                     <Width>249.377</Width>
                  </Element>
                  <Element xsi:type="XTextTableColumn">
                     <Width>536.985</Width>
                  </Element>
                  <Element xsi:type="XTextTableColumn">
                     <Width>162.623</Width>
                  </Element>
                  <Element xsi:type="XTextTableColumn">
                     <Width>239.947</Width>
                  </Element>
                  <Element xsi:type="XTextTableColumn">
                     <Width>692.065</Width>
                  </Element>
               </Columns>
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="1" />
            <Element xsi:type="XString" StyleIndex="7">
               <Text>主诉：</Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="1">
               <ID>PK_6</ID>
               <XElements>
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>车祸致腰部，右大腿疼痛2小时，治疗好后转内科。</Text>
                  </Element>
               </XElements>
               <Name>主诉</Name>
               <InnerValue>车祸致腰部，右大腿疼痛2小时，治疗好后转内科。</InnerValue>
               <BackgroundText>主诉</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="1" />
            <Element xsi:type="XString" StyleIndex="7">
               <Text>病情摘要：</Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="1">
               <ID>PK_70</ID>
               <ToolTip>目前情况、转入诊疗计划</ToolTip>
               <XElements>
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>神清，言语含糊，可简单交流。经口进食食糜泥糊及少部分软食，饮水有呛咳。大小便可控制。床上翻身坐起需中等量辅助，坐位平衡3级，1人中等量辅助下坐站转移，可以独站5-10秒，站位平衡接近1级。1人大量辅助下短距离步行，1人大量辅助下高架助行器短距离行走。右手可以辅助洗漱、吃饭，日常生活大部分依赖。目前改良Barthel指数32分。</Text>
                  </Element>
               </XElements>
               <Name>病情摘要</Name>
               <InnerValue>神清，言语含糊，可简单交流。经口进食食糜泥糊及少部分软食，饮水有呛咳。大小便可控制。床上翻身坐起需中等量辅助，坐位平衡3级，1人中等量辅助下坐站转移，可以独站5-10秒，站位平衡接近1级。1人大量辅助下短距离步行，1人大量辅助下高架助行器短距离行走。右手可以辅助洗漱、吃饭，日常生活大部分依赖。目前改良Barthel指数32分。</InnerValue>
               <BackgroundText>病情摘要</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="1" />
            <Element xsi:type="XString" StyleIndex="1">
               <Text>记录医师：王医生</Text>
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="8" />
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
            <FontName>宋体</FontName>
            <FontSize>12</FontSize>
            <LineSpacingStyle>Space1pt5</LineSpacingStyle>
         </Style>
         <Style Index="2">
            <FontName>宋体</FontName>
            <FontSize>12</FontSize>
            <Bold>true</Bold>
            <LineSpacingStyle>Space1pt5</LineSpacingStyle>
         </Style>
         <Style Index="3">
            <FontName>宋体</FontName>
            <FontSize>9</FontSize>
            <LineSpacingStyle>Space1pt5</LineSpacingStyle>
         </Style>
         <Style Index="4">
            <FontName>宋体</FontName>
            <FontSize>9</FontSize>
            <LineSpacingStyle>Space1pt5</LineSpacingStyle>
            <BorderWidth>1</BorderWidth>
            <PaddingLeft>15</PaddingLeft>
            <PaddingTop>10</PaddingTop>
            <PaddingRight>15</PaddingRight>
            <PaddingBottom>10</PaddingBottom>
         </Style>
         <Style Index="5">
            <FontName>宋体</FontName>
            <FontSize>10.5</FontSize>
            <LineSpacingStyle>Space1pt5</LineSpacingStyle>
         </Style>
         <Style Index="6">
            <FontName>宋体</FontName>
            <FontSize>9</FontSize>
            <LineSpacingStyle>Space1pt5</LineSpacingStyle>
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
         <Style Index="7">
            <FontName>宋体</FontName>
            <FontSize>12</FontSize>
            <LineSpacingStyle>Space1pt5</LineSpacingStyle>
            <TitleLevel>1</TitleLevel>
         </Style>
         <Style Index="8">
            <FontName>宋体</FontName>
            <FontSize>12</FontSize>
            <LineSpacingStyle>Space1pt5</LineSpacingStyle>
            <Align>Right</Align>
         </Style>
      </Styles>
   </ContentStyles>
   <DocumentContentVersion>112</DocumentContentVersion>
   <Info>
      <CreationTime>1980-01-01T00:00:00+08:00</CreationTime>
      <LastModifiedTime>2025-08-18T11:32:41+08:00</LastModifiedTime>
      <LastPrintTime>1980-01-01T00:00:00+08:00</LastPrintTime>
      <Operator>DCSoft.Writer Version:1.0.0.0</Operator>
      <NumOfPage>1</NumOfPage>
   </Info>
   <BodyText>2015年10月15日 10时25分         转入记录

入院时间： 2015年01月14日 11时34分  转出时间： 2015年10月15日 10时26分 
姓名：刘玥 性别：女 年龄：29岁4月 
转出科室： 骨科 转入科室： 内科 
转出诊断：   转入诊断：   
主诉：车祸致腰部，右大腿疼痛2小时，治疗好后转内科。
病情摘要：神清，言语含糊，可简单交流。经口进食食糜泥糊及少部分软食，饮水有呛咳。大小便可控制。床上翻身坐起需中等量辅助，坐位平衡3级，1人中等量辅助下坐站转移，可以独站5-10秒，站位平衡接近1级。1人大量辅助下短距离步行，1人大量辅助下高架助行器短距离行走。右手可以辅助洗漱、吃饭，日常生活大部分依赖。目前改良Barthel指数32分。
记录医师：王医生
</BodyText>
   <PageSettings />
</XTextDocument>
`
