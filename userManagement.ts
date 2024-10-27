export namespace UserManagement {
    export namespace Admin {
        export class AdminUser {
            constructor(public name: string, public email: string, public isSuperAdmin: boolean ) {}

            changeAccessRights(isSuperAdmin: boolean) {
                this.isSuperAdmin = isSuperAdmin;
                console.log(`${this.name} now has super admin rights: ${this.isSuperAdmin}`);
                
            }
        }
    }
}