export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      _prisma_migrations: {
        Row: {
          applied_steps_count: number
          checksum: string
          finished_at: string | null
          id: string
          logs: string | null
          migration_name: string
          rolled_back_at: string | null
          started_at: string
        }
        Insert: {
          applied_steps_count?: number
          checksum: string
          finished_at?: string | null
          id: string
          logs?: string | null
          migration_name: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Update: {
          applied_steps_count?: number
          checksum?: string
          finished_at?: string | null
          id?: string
          logs?: string | null
          migration_name?: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Relationships: []
      }
      Addresses: {
        Row: {
          address: string
          city: string
          created_at: string
          id: number
          state: string
          user_id: string
          zip: string
        }
        Insert: {
          address: string
          city: string
          created_at?: string
          id?: number
          state: string
          user_id: string
          zip: string
        }
        Update: {
          address?: string
          city?: string
          created_at?: string
          id?: number
          state?: string
          user_id?: string
          zip?: string
        }
        Relationships: []
      }
      messages: {
        Row: {
          country: string | null
          created_at: string
          email: string | null
          id: number
          message: string | null
          name: string | null
          telephoneNumber: string | null
        }
        Insert: {
          country?: string | null
          created_at?: string
          email?: string | null
          id?: number
          message?: string | null
          name?: string | null
          telephoneNumber?: string | null
        }
        Update: {
          country?: string | null
          created_at?: string
          email?: string | null
          id?: number
          message?: string | null
          name?: string | null
          telephoneNumber?: string | null
        }
        Relationships: []
      }
      OrderItems: {
        Row: {
          created_at: string
          id: number
          order_id: number
          product_id: number
        }
        Insert: {
          created_at?: string
          id?: number
          order_id: number
          product_id: number
        }
        Update: {
          created_at?: string
          id?: number
          order_id?: number
          product_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "OrderItems_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "Orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "OrderItems_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "Products"
            referencedColumns: ["id"]
          }
        ]
      }
      Orders: {
        Row: {
          address: string
          city: string
          country: string
          created_at: string
          email: string
          id: number
          name: string
          state: string
          stripe_id: string
          total: number
          user_id: string
          zip: string
        }
        Insert: {
          address: string
          city: string
          country: string
          created_at?: string
          email: string
          id?: number
          name: string
          state: string
          stripe_id: string
          total: number
          user_id: string
          zip: string
        }
        Update: {
          address?: string
          city?: string
          country?: string
          created_at?: string
          email?: string
          id?: number
          name?: string
          state?: string
          stripe_id?: string
          total?: number
          user_id?: string
          zip?: string
        }
        Relationships: []
      }
      Products: {
        Row: {
          category: string
          company: string
          created_at: string
          description: string
          id: number
          priceOnQuote: boolean
          stock: boolean
          title: string
          url: string
        }
        Insert: {
          category: string
          company: string
          created_at?: string
          description: string
          id?: number
          priceOnQuote: boolean
          stock: boolean
          title: string
          url: string
        }
        Update: {
          category?: string
          company?: string
          created_at?: string
          description?: string
          id?: number
          priceOnQuote?: boolean
          stock?: boolean
          title?: string
          url?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
