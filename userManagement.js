"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManagement = void 0;
var UserManagement;
(function (UserManagement) {
    var Admin;
    (function (Admin) {
        var AdminUser = /** @class */ (function () {
            function AdminUser(name, email, isSuperAdmin) {
                this.name = name;
                this.email = email;
                this.isSuperAdmin = isSuperAdmin;
            }
            AdminUser.prototype.changeAccessRights = function (isSuperAdmin) {
                this.isSuperAdmin = isSuperAdmin;
                console.log("".concat(this.name, " now has super admin rights: ").concat(this.isSuperAdmin));
            };
            return AdminUser;
        }());
        Admin.AdminUser = AdminUser;
    })(Admin = UserManagement.Admin || (UserManagement.Admin = {}));
})(UserManagement || (exports.UserManagement = UserManagement = {}));
