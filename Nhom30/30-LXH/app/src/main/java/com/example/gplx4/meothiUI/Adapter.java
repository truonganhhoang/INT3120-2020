package com.example.gplx4.meothiUI;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.cardview.widget.CardView;
import androidx.recyclerview.widget.RecyclerView;

import com.example.gplx4.R;

import java.util.List;

public class Adapter extends RecyclerView.Adapter<Adapter.ViewHolder> {

    public static class ViewHolder extends RecyclerView.ViewHolder {
        CardView cardView;
        TextView meothiTitle;
        TextView meothiContent;
        ImageView imageView;
        Button linkBtn;

//        public ViewHolder(View itemView) {
//            super(itemView);
//            cardView = (CardView) itemView.findViewById(R.id.cv);
//            meothiTitle = (TextView) itemView.findViewById(R.id.meothi_title);
//            meothiContent = (TextView) itemView.findViewById(R.id.meothi_content);
//        }
        public ViewHolder(View itemView) {
            super(itemView);
            cardView = (CardView) itemView.findViewById(R.id.cv);
            meothiTitle = (TextView) itemView.findViewById(R.id.meothi_title);
            meothiContent = (TextView) itemView.findViewById(R.id.meothi_content);
            imageView = (ImageView) itemView.findViewById(R.id.imageView4);
            linkBtn = (Button) itemView.findViewById(R.id.linkBtn);
        }
    }

    List<Meothi> tricks;
    Adapter(List<Meothi> tricks){
        this.tricks=tricks;
    }

    @Override
    public int getItemCount() {
        return tricks.size();
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int i) {
        View v = LayoutInflater.from(parent.getContext()).inflate(R.layout.custom_card,parent,false);
        ViewHolder viewHolder = new ViewHolder(v);
        return viewHolder;
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int i) {
        holder.meothiTitle.setText(tricks.get(i).title);
        holder.meothiContent.setText(tricks.get(i).content);
        if(tricks.get(i).imageResource != null) {
            holder.imageView.setVisibility(View.VISIBLE);
        }
        if(tricks.get(i).linkBtn == true) {
            holder.linkBtn.setVisibility(View.VISIBLE);
        }

    }

    @Override
    public void onAttachedToRecyclerView(@NonNull RecyclerView recyclerView) {
        super.onAttachedToRecyclerView(recyclerView);
    }
}
