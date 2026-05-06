# How do Pick and Omit utility types prevent code duplication while creating specialized "slices" of a master interface? Discuss how this keeps your code DRY (Don't Repeat Yourself).

## 🧾 Introduction

As our application grows so does our data models. so in this scenario we may need to write new interfaces again and again.

That leads to duplication… and duplication leads to bugs.

This is where TypeScript’s Pick and Omit utility types come in

---

### The Problem: Code Duplication

Let’s say we have an interface:

```ts
interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
}

// Now imagine different needs:

// - Login form → needs email + password
// - Profile UI → needs id, name, email
// - Public API → should NOT expose password

//❌ Bad approach (duplication)
interface ILoginUser {
  email: string;
  password: string;
}

interface IProfileUser {
  id: number;
  name: string;
  email: string;
}
```

- Same fields repeated
- If email type changes -> we must update everywhere
- Easy to make mistakes

### 🫳🏻 Solution 1: Pick

**Pick lets us select specific properties from a type.**

```ts
type TLoginUser = Pick<User, "email" | "password">;

type TProfileUser = Pick<User, "id" | "name" | "email">;
```

### ✂️ Solution 2: Omit

**Omit does the opposite — it removes specific fields.**

```ts
type TPublicUser = Omit<User, "password">;
```

#### Why use this

1️⃣ **Single source of truth**

We define data once:

interface IUser { ... }

👉 Everything else is derived from it.

2️⃣ **Automatic updates**

If we change the mother interface:

email: string → email: EmailType

👉 All derived types update automatically.

3️⃣ **Less bugs**

No mismatch between:

LoginUser
ProfileUser
API types

👉 Everything stays consistent.

### DRY Principle

DRY means:

“Avoid repeating the same logic multiple times.”

Using Pick and Omit:

❌ No repeated fields,
❌ No manual syncing,
❌ No hidden inconsistencies

👉 Instead:

✅ Reuse,
✅ Consistency,
✅ Maintainability

Need only some fields ➡️ Pick,
Need everything except a few fields ➡️ Omit

## 🧾 Conclusion

Pick and Omit help us to keep our code DRY, reduce duplication, maintain consistency across our app.
