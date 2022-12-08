/*
 * @Author: fangkg
 * @Date: 2022-12-08 17:16:39
 * @LastModifiedBy: fangkg
 * @LastEditTime: 2022-12-08 17:17:54
 * @Description: type-enum是指commit正文前缀，Feat新功能，Fix修复，Revert回滚
 */
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", ["feat", "fix", "revert"]],
    "subject-max-length": [1, "always", 30]
  }
}