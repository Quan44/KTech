// src/auth.util.ts
import { useAuthStore } from "@/useAuthStore";

/**
 * Kiểm tra xem người dùng có đủ ít nhất một trong các quyền được yêu cầu không
 * @param requiredPermissions Danh sách quyền yêu cầu (ví dụ: ["Administrators"])
 * @returns true nếu có ít nhất 1 quyền khớp
 */
export function hasPermissions(requiredPermissions: string[]): boolean {
    const { loggedInUser } = useAuthStore.getState();

    if (!loggedInUser || !loggedInUser.roles) return false;

    const userRoles = loggedInUser.roles.map((role) => role.name);
    return requiredPermissions.some((permission) => userRoles.includes(permission));
}
