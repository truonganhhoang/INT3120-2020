package com.example.dictbox;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import java.util.ArrayList;

public class SentencesAdapter extends BaseAdapter {
    private ListItemListener listener;
    Context mContext;
    ArrayList<String> mSource;

    public SentencesAdapter(Context context, ArrayList<String> source) {
        this.mSource = source;
        this.mContext = context;
    }

    @Override
    public int getCount() {
        return mSource.size();
    }

    @Override
    public Object getItem(int position) {
        return mSource.get(position);
    }

    @Override
    public long getItemId(int position) {
        return 0;
    }

    @Override
    public View getView(final int position, View convertView, ViewGroup parent) {
        SentencesAdapter.ViewHolder viewHolder;
        if (convertView == null) {
            viewHolder = new SentencesAdapter.ViewHolder();
            convertView = LayoutInflater.from(mContext).inflate(R.layout.sentences_layout_item, parent, false);
            viewHolder.textView = convertView.findViewById(R.id.tvWord);

            convertView.setTag(viewHolder);
        } else {
            viewHolder = (SentencesAdapter.ViewHolder) convertView.getTag();
        }

        viewHolder.textView.setText(mSource.get(position));
        convertView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (listener != null)
                    listener.onItemClick(position);
            }
        });

        return convertView;
    }

    class ViewHolder {
        TextView textView;
    }

    public void setOnItemClick(ListItemListener listItemListener) {
        this.listener = listItemListener;
    }

}
