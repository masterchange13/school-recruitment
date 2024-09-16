<template>
    <el-row>
      <el-col :span="24"><div class="grid-content ep-bg-purple-dark" />col1</el-col>
    </el-row>
    <el-row>
      <el-col :span="12"><div class="grid-content ep-bg-purple" />col2</el-col>
      <el-col :span="12"><div class="grid-content ep-bg-purple-light" />dsadas</el-col>
    </el-row>
    <el-row>
      <el-col :span="8"><div class="grid-content ep-bg-purple" />sdadsa</el-col>
      <el-col :span="8"><div class="grid-content ep-bg-purple-light" />dasdsa</el-col>
      <el-col :span="8"><div class="grid-content ep-bg-purple" />dasd</el-col>
    </el-row>
    <el-row>
      <el-col :span="6"><div class="grid-content ep-bg-purple" />dasd</el-col>
      <el-col :span="6"><div class="grid-content ep-bg-purple-light" />dsad</el-col>
      <el-col :span="6"><div class="grid-content ep-bg-purple" />dasdsa</el-col>
      <el-col :span="6"><div class="grid-content ep-bg-purple-light" />dsad</el-col>
    </el-row>
    <el-row>
      <el-col :span="4"><div class="grid-content ep-bg-purple" />das</el-col>
      <el-col :span="4"><div class="grid-content ep-bg-purple-light" />das</el-col>
      <el-col :span="4"><div class="grid-content ep-bg-purple" />dasd</el-col>
      <el-col :span="4"><div class="grid-content ep-bg-purple-light" />dasd</el-col>
      <el-col :span="4"><div class="grid-content ep-bg-purple" />das</el-col>
      <el-col :span="4"><div class="grid-content ep-bg-purple-light" />dsa</el-col>
    </el-row>
  </template>
  
  <style lang="scss">
  .el-row {
    margin-bottom: 20px;
  }
  .el-row:last-child {
    margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
  }
  
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  </style>