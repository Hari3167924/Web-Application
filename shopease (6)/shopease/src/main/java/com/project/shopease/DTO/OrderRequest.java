//package com.project.shopease.DTO;
//
//import lombok.Getter;
//import lombok.Setter;
//
//@Setter
//@Getter
//public class OrderRequest {
//    // ✅ Getters & Setters
//    private Long userId;
//    private Long productId;
//    private int quantity;
//
//}


//
//package com.project.shopease.DTO;
//
//import com.project.shopease.entity.CartItem;
//import lombok.Getter;
//import lombok.Setter;
//
//@Getter
//@Setter
//public class OrderRequest {
//
//    private String username;   // ✅ ADD THIS
//    private Long productId;
//    private int quantity;
//
//    public CartItem[] getItems() {
//    }
//}




//package com.project.shopease.DTO;
//
//import com.project.shopease.entity.CartItem;
//import lombok.Getter;
//import lombok.Setter;
//import java.util.List;
//
//@Getter
//@Setter
//public class OrderRequest {
//
//    private String username;
//    private List<CartItem> items;
//}

//package com.project.shopease.DTO;
//
//import lombok.Getter;
//import lombok.Setter;
//
//@Getter
//@Setter
//public class OrderRequest {
//
//    private Long userId;
//    private String username;
//}
//
//package com.project.shopease.DTO;
//
//import lombok.Getter;
//import lombok.Setter;
//
//@Getter
//@Setter
//public class OrderRequest {
//    private Long userId;
//}


package com.project.shopease.DTO;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class OrderRequest {



    private Long userId;
    private Double total;
    private List<OrderItemRequest> items;

}





//public class OrderRequest {
//
//    private Long userId;
//    public Double getTotalAmount() {
//        return total;
//    }
//    private List<OrderItemRequest> items;
//
//    // getters & setters
//
//    public Long getUserId() {
//        return userId;
//    }
//
//    public void setUserId(Long userId) {
//        this.userId = userId;
//    }
//
//    public Double getTotal() {
//        return total;
//    }
//
//    public void setTotal(Double total) {
//        this.total = total;
//    }
//
//    public List<OrderItemRequest> getItems() {
//        return items;
//    }
//
//    public void setItems(List<OrderItemRequest> items) {
//        this.items = items;
//    }
//
//
//    public Object getTotalAmount() {
//    }
//}